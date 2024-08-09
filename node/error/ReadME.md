# error (예외 처리)

노드에서는 예외가 발생하면 실행 중인 노드 프로세스를 멈추게 만들기 때문에 예외 처리가 정말 중요하다.
노드의 메인 스레드는 하나뿐이므로 메인 스레드가 에러로 멈춘다는 것은 스레드를 갖고 있는 프로세스가 멈춘다는 뜻이고, 전체 서버도 멈춘다는 뜻과 같다.


## 예외 처리 방법

<b>try/catch</b><br>
프로세스가 멈추지 않도록 에러가 발생할 것 같은 부분을 try/catch문으로 감싸주면 에러를 잡을 수 있다.

<b>내장 모듈</b><br>
error2.js 파일과 같이 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지 않는다. 내장 모듈을 사용한다면, 에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 된다.

<b>throw</b><br>
그러나 에러가 발생했을 때 throw하면 노드 프로세스가 멈춰버린다. 따라서 throw하는 경우네는 반드시 try/catch문으로 throw한 에러를 잡아야 한다.

<b>uncaughtException</b><br>
try/catch로 처리하지 못한 에러가 발생해도 uncaughtException 이벤트 리스너로 모든 에러를 처리할 수 있다.
다만 노드 공식 문서에서 uncaughtException 이벤트는 최후의 수단으로 사용할 것을 명시하고 있다. uncaughtException 이벤트 발생 후 다음 동작이 제대로 동작하는지 보증하지 않는다. 즉, 복구 작업 코드를 넣어뒀더라도 그것이 동작하는지 확신할 수 없다. 따라서 uncaughtException은 단순 에러를 기록하는 정도로 사용하고, 에러를 기록한 후 process.exit()으로 프로세스를 종료하는 것이 좋다.

## 자주 발생하는 에러들

<b>node: command not found:</b> 노드를 설치했지만 이 에러가 발생하는 경우 환경변수가 제대로 설정되어 있지 않은 것이다. node 외의 다른 명령어도 그 명령어를 수행할 수 있는 파일이 환경 변수에 들어 있어야 명령어를 콘솔에서 사용할 수 있다.
<b>ReferenceError: 모듈 is not defined:</b> 모듈을 require했는지 확인
<b>Error: Cannot find moudel 모듈명:</b> 해당 모듈을 require했지만 설치하지 않았다. npm i 명령어로 설치할 것.
<b>Error [ERR_MODULE_NOT_FOUND]:</b> 존재하지 않는 모듈을 불러오려 할 때 발생
<b>ERROR: Cant' set headers after the are sent:</b> 요청에 대한 응답을 보낼 때 응답을 두 번 이상 보냈을 경우 발생
<b>FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory:</b> 코드 실행시 메모리가 부족해서 스크립트가 정상적으로 작동되지 않는 경우. 코드가 잘못 구현되어 있을 확률이 높으며, 노드가 활용할 수 있는 메모리가 부족한 경우라면 노드의 메모리를 늘리면 된다. node --max-old-space-size=4096 파일명
<b>UnhandledPromiseRejectionWarning: Unhandled promise rejection:</b> 프로미스 사용 시 catch 메서드를 붙이지 않을 경우 발생
<b>EADDRINUSE 포트 번호:</b> 해당 포트 번호에 이미 다른 프로세스가 연결되어 있을 경우 발생
<b>EACCES 또는 EPERM:</b> 노드 작업의 권한이 충분하지 않을 경우 발생. 파일/폴더 수정, 삭제, 생성 권한을 확인하고 맥이나 리눅스라면 명령어 앞에 sudo를 붙이는 등으로 권한을 해결해야 함
<b>EJSONPARSE:</b> package.json 등의 JSON 파일에 문법 오류가 있을 때 발생. 자바스크립트 객체와는 형식이 조금 다르기에 쉼표 등을 확인 
<b>ECONNREFUSED:</b> 요청을 보냈으나 연결이 성립되지 않음. 요청을 받는 서버의 주소와 서버 상태등을 확인
<b>ETARGET:</b> package.json에 기록한 패키지 버전이 존재하지 않을 때 발생
<b>ETIMEOUT:</b> 요청을 보냈으나 응답이 시간 내에 오지 않을 때 발생. 요청을 받는 서버 상태 점검
<b>ENOENT: no such file or directory:</b> 지정한 폴더나 파일이 존재하지 않는 경우 발생. 맥이나 리눅스는 대소문자도 구별하므로 확인해야 함