const{
    Worker, isMainThread, parentPort, workerData,
    //Worker: 새로운 스레드를 생성하는 데 사용되는 클래스입니다.
    // isMainThread: 현재 실행 중인 코드가 메인 스레드에서 실행되고 있는지 여부를 확인하는 Boolean 값입니다.
    // parentPort: 워커 스레드와 메인 스레드 간의 메시지 통신을 관리하는 포트입니다.
    // workerData: 워커 스레드로 전달된 데이터를 담고 있는 객체입니다.
} = require('worker_threads');

if (isMainThread) { // 부모일 때
    const threads = new Set();  // 워커 스레드들을 관리하기 위한 Set 객체
    threads.add(new Worker(__filename, {
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0){
                console.log('job done');
            }
        });
    }
} else {    // 워커일 때
    const data = workerData;
    parentPort.postMessage(data.start + 100);
    parentPort.postMessage(data.start + 100);
    parentPort.postMessage(data);
}
/*
from worker 101
from worker 101
from worker { start: 1 }
from worker 102
from worker 102
from worker { start: 2 }
*/