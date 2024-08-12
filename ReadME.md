Node.js 자바스크립트 런타임(특정 언어로 만든 프로그램들을 실행할 수 있는 환경)<br>

대부분 서버(클라이언트와 네트워크 상으로 통신하여 서비스나 데이터를 제공)로 사용하지만, 런타임 프로그램이란 사실을 명시할 것.<br>

Node.js(이벤트 기반, 논블로킹 모델, 싱글 스레드)<br>
이벤트 기반 시스템(클릭이나 네트워크 요청 등), 이벤트 리스너에 콜백 함수를 등록하는 방식.<br>

자바스크립트 코드는 동시에 실행할 수 없음(싱글 스레드)<br>
그래서 오래 걸리는 작업을 처리 해야 하는 경우 논블로킹을 통해 실행 순서를 바꿔줌으로서 간단한 작업들이 대기해야 하는 경우를 막을 수 있음.<br>
setTimeOut이나 setImmediate를 사용해 논블로킹 I/O(이벤트 태스크를 동시에 처리) 처리.<br>

스레드 : 프로세스 내에서 실행되는 흐름의 단위(프로세스는 운영체제에서 할당하는 작업의 단위)<br>
그래서 노드는 싱글 스레드에 멀티 프로세싱 방식을 채택함.<br>
- 개수는 많지만 작은 데이터를 실시간으로 주고받는 데 적합, ex)실시간 채팅, 주식 차트
- 이미지나 비디오 처리, 대규모 데이터 처리와 같이 CPU를 많이 사용하는 작업은 권장X

Babel : 자바스크립트가 매번 업데이트 되기 때문에 구형 브라우저(IE 등)에도 동작하도록 문법을 변환해주는 도구<br>

## 패키지 종류

## js - 알아둬야 할 자바스크립트
<b>es6 :</b> ES(2015++)6 로 변경되거나 추가 된 자바스크립트 문법들<br>

## node - 노드 기능
<b>global :</b> 자바스크립트가 아닌 노드 내장 객체 global의 timer와 console을 다루는 함수들(window X)<br>
<b>ECMAScript_module :</b> Common JS 모듈이 아닌 ES Module 관련된 내장 객체들<br>
<b>built-in_module :</b> 노드 내장 모듈<br>
<b>event :</b> events 모듈을 이용해 이벤트 커스텀<br>
<b>error :</b> 예외 처리<br>

## http - http 모듈로 서버 만들기
<b>request_response :</b> 요청과 응답 이해하기