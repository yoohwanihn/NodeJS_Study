## http - http 모듈로 서버 만들기

서버는 클라이언트가 있기에 동작한다. 클라이언트에서 서버로 요청(request)을 보내고, 서버에서는 요청의 내용을 읽고 처리한 뒤 클라이언트에 응답(response)을 보낸다.

## request_response (요청과 응답 이해하기)

노드에서 요청과 응답은 이벤트 방식이라고 생각하면 된다. 클라이언트로부터 요청이 왔을 때 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해둬야 한다. <br>
http 모듈을 사용해 요청을 처리할 수 있으며 <b>createServer</b>로 요청에 대한 콜백 함수를 넣을 수 있으며, 요청이 들어올 때마다 콜백 함수가 실행된다.