// 단방향 암호화 (해시 함수)

const crypto = require('crypto');

crypto.randoBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    })
})

/*
먼저 randomBytes() 메서드로 64바이트의 길이의 문자열을 만든다.(salt)
pbkdf2()메서드에 순서대로 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인수로 넣는다.
즉, 위 코드는 sha512로 변환된 결과값을 다시 sha512로 변환하는 과정을 10만 번 반복하는 코드이다.

crypto.randoBytes와 crypto.pbkdf2 메서드는 내부적으로 스레드 풀을 사용해 멀티 스레딩으로 동작하기 때문에 싱글 스레드 프로그래밍으로 인한 블로킹 걱정은 하지 않아도 된다.
*/