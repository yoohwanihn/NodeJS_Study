const url = require('url');  // url 모듈을 불러옴

const { URL } = url;  // url 모듈에서 URL 클래스를 구조 분해 할당으로 가져옴
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');  // URL 객체 생성
console.log('new URL():', myURL);  // URL 객체 출력
console.log('url.format():', url.format(myURL));  // URL 객체를 다시 문자열로 변환하여 출력
