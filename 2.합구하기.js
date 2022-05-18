//a부터 b까지 합 구하기
// 출력 결과
// 6부터 20까지의 합은 195입니다
// 6부터 76까지의 합은 2911입니다

function sumAtoB(a, b){
  let total = 0; // 값 저장소

  for(let i = a; i <= b; i++){
    // 초기값 i 를 시작 값인 a로 초기화한다.
    // 그리고 i는 마지막 값인 b까지만 커진다!
    total += i; // total = total + i;
  }

  return total;
}

console.log(`1부터 5까지의 합은 ${sumAtoB(1, 5)}입니다.`);
console.log(`2부터 6까지의 합은 ${sumAtoB(2, 6)}입니다.`);

console.log(`6부터 20까지의 합은 ${sumAtoB(6, 20)}입니다.`);
console.log(`6부터 76까지의 합은 ${sumAtoB(6, 76)}입니다.`);