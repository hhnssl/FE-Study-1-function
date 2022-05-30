// 버블정렬
// const arr = [10, 9, 7, 8, 6, 4, 3, 5, 1, 2];

// function bubble(arr){
//   let result = arr.slice();

//   for(let i = 0; i < result.length - 1; i++){
//     for(let j = 0; j < result.length - i; j++){
//       if (result[j] > result[j+1]){
//         let temp = result[j];
//         result[j] = result[j+1];
//         result[j+1] = temp;
//       }
//     }
//   }

//   return result;
// }

// console.log(bubble(arr));


// 대소문자바꿔출력하기
// const arr = 'ABCDxyz';
// let arr2 = []; // 대소문자를 바꿔서 넣을 빈 배열
// let i = 0;

// for(let index of arr){
//   if (index === index.toLowerCase()){
//     arr2[i] = index.toUpperCase(); 
//   }else{
//     arr2[i] = index.toLowerCase();
//   }
//   i++;

// }
// console.log(arr2);

// 호준이의 아르바이트
// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 산다.
// 사탕을 받을 학생의 수를 출력하세요.
// const scores = [99, 55, 80, 89, 30, 56, 55, 64, 98, 80, 98, 99, 99];
// let arr = [];
// let count = 0;



// 반장선거
// const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
// let result = {}; // 인당 몇 표를 받았는지 저장할 객체
// let winner = ""; // 최종 우승자를 저장할 변수

// for(index in array){
//   let val = array[index];

//   // console.log(result[val]);
//   if(result[val] === undefined){
//     result[val] = 1;
//   } else{
//     result[val] += 1;
//   }
// }


// // keys() : 객체의 키들만 가져와서 배열로 만듦
// winner = Object.keys(result).reduce((a, b) => {
//   // a가 더 크면 a 반환 아니면 b 반환
//   // ex) result[a]의 결과 값은 숫자임
//   return result[a] > result[b] ? a : b;
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);


// 현재연도 출력하기
let d = new Date();
let year = d.getTime();

year = Math.floor( year / (1000 * 60 * 60 * 24 * 365)) + 1970;
console.log(year);

console.log(`현재 연도는 ${year}`);
