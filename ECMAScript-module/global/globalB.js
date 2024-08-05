const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());
global.message = '반갑습니다';
console.log(global.message);
console.log(A());