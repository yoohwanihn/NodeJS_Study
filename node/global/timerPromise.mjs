// 콜백이 아닌, 프로미스 기반 타이머는 노드 내장 모듈을 사용함.
import { setTimeout, setInterval } from 'timers/promises';

// then 대신 await을 사용하기 위해 ESModule 방식 사용
await setTimeout(3000);
console.log('3초 뒤 실행');

for await (const startTime of setInterval(1000, Date.now())){
    console.log('1초마다 실행', new Date(startTime));
}