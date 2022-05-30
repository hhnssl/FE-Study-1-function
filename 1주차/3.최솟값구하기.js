//34,5,11,85,92중에서 최솟값은 = 5

function min(arr){
  // 일단 배열의 0번째 값을 (마지막에 반환할) result에 넣어줘서 세팅한다.
  let result = arr[0];

  // for of문으로 배열에 있는 모든 값을 한번씩 item에 넣어 값을 비교한다.
  for(const item of arr){
    if(item < result){
      // 아이템에 있는 값(배열의 x번째 값)이 result 보다 작으면, result의 값을 더 작은 수인 item의 값으로 바꿔치기한다. 
      result = item;
    }
  }

  return result;
}




const arr = [50, 30, 33, 15, 779562];
console.log(`${arr}중에서 최솟값은 = ${min(arr)}`);