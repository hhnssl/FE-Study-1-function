// 1. 윤년구하기
// 윤년의 조건
// 1. 4로 나누어 떨어지면서, 100으로 나누어 떨어지지 않는다.
// 2. 또는 400으로 나누어 떨어진다.
// 출력 결과: 2020년은 윤년일까? === true
// function 윤년구하기(year){
//   return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
// }

// console.log(`출력 결과: 2020년은 윤년일까 === ${윤년구하기(2020)}`);


// 2. 합구하기
// a부터 b까지 합 구하기
// 출력 결과
// 6부터 20까지의 합은 195입니다
// 6부터 76까지의 합은 2911입니다
// function 합구하기(num1, num2){
//   let total = 0;
//   for(let i = num1; i <= num2; i++){
//     total = total + i;
//   }

//   return total;
// }

// console.log(`6부터 20까지의 합은 ${합구하기(6, 20)}입니다.`);
// console.log(`6부터 76까지의 합은 ${합구하기(6, 76)}입니다.`);


// 3. 최솟값 구하기
//34,5,11,85,92중에서 최솟값은 = 5
// function 최소값구하기(arr){
//   let result = arr[0];
//   for(let item of arr){
//     if(item < result){
//       result = item;
//     }
//   }

//   return result;
// }

// let arr = [10, 2, 5, 33, 66];
// console.log(`34, 5, 11, 85, 92중에서 최솟값은 ${최소값구하기(arr)}`);


// 4. 가격낮은순구하기
// product 할당부분은 복붙해놓고 시작~ 
// let products = [
//   { id: 0, price: 70000, title: 'Blossom Dress' },
//   { id: 1, price: 32000, title: 'Check Shirt' },
//   { id: 2, price: 15000, title: 'Black Tie' },
//   { id: 3, price: 67000, title: 'Springfield Shirt' },
//   { id: 4, price: 82000, title: 'Red Mini Dress' },
// ];

// function 가격낮은순정렬(arr){
//   arr.sort((a, b) => {
//     return a.price - b.price;
//   });

//   console.log(arr);
// }

// // sort 정렬은 원본 배열이 바뀐다
// 가격낮은순정렬(products);


// 5. 별찍기
function starTree(level){
  let tree = '';

  for(let i = 1; i <= level; i++){
    let star = '';

    // 공백
    for(let j = 1; j <= level - i; j++){
      star += ' ';
    }

    //별
    for(let k = 1; k <= 2 * i - 1; k++){
      star += '*';
    }

    tree = tree + star + '\n';
  }
  console.log(tree);
}

starTree(2);

