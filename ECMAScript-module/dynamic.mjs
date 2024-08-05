const a = true;
if (a) {
    const m1 = await import('./func.mjs')   // import는 promise를 반환하기에 await이나 then을 붙여야 한다.
    console.log(m1)
    const m2 = await import('./var.mjs')    // ES 모듈의 최상위 스코프에서는 async 함수 없이도 await할 수 있다.
    console.log(m2)
}
console.log('성공');