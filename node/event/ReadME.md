# event (이벤트)

#### events 모듈을 사용해 이벤트를 관리할 수 있다. 직접 이벤트를 만들 수 있고 다양한 동작을 직접 구현할 수 있다.
<br>

<b>on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결한다. 이를 이벤트 리스닝이라고 하며, 이벤트 하나에 이벤트 여러 개를 달아줄 수도 있다.<br>
<b>addListener(이벤트명, 콜백) :</b> on 과 기능이 같다. <br>
<b>emit(이벤트명) :</b> 이벤트를 호출하는 메서드다. 이벤트 이름을 인수로 넣으면 이벤트 콜백이 실행된다.<br>
<b>once(이벤트명, 콜백) :</b> 한 번만 실행되는 이벤트이다. 콜백이 반드시 한 번 실행된다.<br>
<b>removeAllListeners(이벤트명) :</b> 이벤트에 연결된 모든 이벤트 리스너를 제거한다.<br>
<b>removeListener(이벤트명, 리스너) :</b> 이벤트에 연결된 리스너를 하나씩 제거한다.<br>
<b>off(이벤트명, 콜백) :</b> 노드 10 버전에서 추가된 메서드로, removeListener와 기능이 같다.<br>
<b?>listenerCount(이벤트명) :</b> 현재 리스너가 몇 개 연결되어 있는지 확인한다.<br>