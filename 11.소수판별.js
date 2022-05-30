// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

function check_prime(num){
  // 2로 나누어떨어지는지 감별하기
  for(let i = 2; i < num; i++){
    // 입력한 수를 2 ~ 입력한수-1로 나누기
    let result = num % i;
    if(result === 0){
      // 0으로 나누어 떨어지면
      console.log(`${num}은 소수가 아닙니다`);
      return false; // 함수 빠져나가기
    }
  }

  if(num === 1){
    console.log('2 이상의 값을 입력하세요');
    return false;
  }

  // 위의 코드들을 모두 통화하면 소수
  console.log(`${num}은 소수 입니다.`);
}


// 함수호출
check_prime(4);
check_prime(5);
check_prime(6);
check_prime(7);