const a = false;
if (a) {
    require('./func');   // 조건부로 모듈을 불러옴, 다이내믹 임포트
}
console.log('성공');