const arr = 'ABCDxyz';
let arr2 = []; // 대소문자를 바꿔서 넣을 빈 배열

// arr 배열크기 만큼 반복
for(let i = 0; i < arr.length; i++){
  // 만약에 arr[i]번째에 있는 값이 arr[i] 값을 소문자로 바꾼 것과 같다면 
  // arr[i]번째 값이 소문자라는 뜻이므로 대문자로 바꾸어 빈 배열에 담음
  if(arr[i] === arr[i].toLowerCase()){
    arr2[i] = arr[i].toUpperCase();
  }else{
    arr2[i] = arr[i].toLowerCase();
  }
}

// 출력
let print = [];
for(let i = 0; i < arr2.length; i++){
  print += arr2[i];
}

console.log(print);