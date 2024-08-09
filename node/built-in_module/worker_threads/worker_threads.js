const{
    Worker, isMainThread, parentPort,
    //Worker: 새로운 스레드를 생성하는 데 사용되는 클래스입니다.
    // isMainThread: 현재 실행 중인 코드가 메인 스레드에서 실행되고 있는지 여부를 확인하는 Boolean 값입니다.
    // parentPort: 워커 스레드와 메인 스레드 간의 메시지 통신을 관리하는 포트입니다.
} = require('worker_threads');

if(isMainThread) {  // 부모일 때
    const worker = new Worker(__filename);  // 메인 스레드에서 새로운 워커 스레드 생성
    worker.on('message', message => console.log('from worker', message));   // 워커 스레드로부터 메시지를 받을 때 호출되는 이벤트
    worker.on('exit', () => console.log('worker exit'));    // 워커 스레드 종료시 호출되는 이벤트
    worker.postMessage('ping'); // 워커 스레드로 ping 메시지를 보냄
} else {    // 워커일 때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}

/*
from parent ping
from worker pong
worker exit
*/