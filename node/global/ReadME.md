# 노드 내장 객체

global 객체의 속성에 값을 대입해 globalA.js, globalB.js 파일 간에 데이터를 공유할 수 있지만, 프로그램의 규모가 커질수록 어떤 파일에서 global 객체에 값을 대입했는지 찾기 힘들어 유지 보수에 어려움을 겪을 수 있다.

다른 파일의 값을 사용하고 싶다면 모듈 형식으로 만든 후 명시적으로 값을 불러와서 사용하는 것이 좋다.

## console
console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
console.log(내용) : 평범한 로그를 콘솔에 표시한다. console.log(내용, 내용, 내용) 처럼 여러 내용을 동시에 표시할 수도 있다.
console.error(에러 내용) : 에러를 콘솔페 표시한다.
console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현된다.
console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용한다. 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣는다.
옵션의 colors를 true로 하면 콘솔에 색이 추가되며, depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다. 기본값은 2이다.
console.trace(레이블) : 에러가 어디서 발생했는지 추적할 수 있게 한다. 에러의 위치가 나오지 않는다면 사용하는 것이 좋다.

## timer
##### 타이머 기능을 제공하는 함수인 setTimeout, setInterval, setImmediate는 노드에서 window 대신 global 객체 안에 있다.
##### 타이머는 콜백 기반 API이지만 프로미스 방식을 사용할 수도 있다.

setTimeout(콜백 함수, 밀리초) : 주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행
setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행
setImmediate(콜백 함수) : 콜백 함수를 즉시 실행

clearTimeout(아이디) : setTimeout을 취소한다.
clearInterval(아이디) : setInterval을 취소한다.
clearImmediate(아이디) : setImmediate를 취소한다.