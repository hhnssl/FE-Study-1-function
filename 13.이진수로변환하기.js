// 10진수를 2진수로
// 160 -> 10100000

// 방법 1
let dec = 160;
// dec(10진수 숫자)를 2로 나눈 나머지값을 순차적으로 저장할 배열 생성
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2); // 정수 반환을 위해
}

console.log(arrBinary.reverse().join(""));

// 방법 2
console.log(dec.toString(2));