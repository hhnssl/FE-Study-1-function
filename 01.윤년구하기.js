// 윤년의 조건
// 1. 4로 나누어 떨어지면서, 100으로 나누어 떨어지지 않는다.
// 2. 또는 400으로 나누어 떨어진다.
// 출력 결과: 2020년은 윤년일까? === true

function isLeapYear(year){
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);






/*
&&와 ||가 한번에 쓰이는 게 헷갈려서 실험해봄
function ft(x, y, z){
  return (x > y) && (x > z) || (y > z);
}

console.log(`${ft(1, 2, 3)}`); // f && f || f -> f
console.log(`${ft(3, 2, 1)}`); // t && t || t -> t
console.log(`${ft(3, 2, 2)}`); // t && t || f -> t
console.log(`${ft(2, 3, 2)}`); // f && f || t -> t
*/