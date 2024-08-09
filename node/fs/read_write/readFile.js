const fs = require('fs');

// 파일의 경로가 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준임.
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});