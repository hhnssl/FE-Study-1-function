function bubble(arr){
  let result = arr.slice(); //원본 배열 복사해서 넣기

  for(let i = 0; i < result.length - 1; i++){
    for(let j = 0; j < result.length - i; j++){
      if (result[j] > result[j+1]){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }

  return result;
}


const arr = [10, 9, 7, 8, 6, 4, 3, 5, 1, 2];
console.log(bubble(arr));