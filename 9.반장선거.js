/*
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 
입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.

*/

const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];


let result = {}; // 인당 몇 표를 받았는지 저장할 객체
let winner = ""; // 최종 우승자를 저장할 변수

for(let index in array){
  // 중복인지 아닌지 검사할 변수
  let val = array[index]; // ex) val에 원범 저장
  if(result[val] === undefined){
    // 만약 키:원범의 값이 비어있다면, 값에 1 추가
    result[val] = 1
  } else{
    // 키의 값이 비어있지 않다면 1 증가시키기
    result[val] = result[val] + 1; // result[val] += 1;
  }
}

// keys() : 객체의 키들만 가져와서 배열로 만듦
winner = Object.keys(result).reduce((a, b) => {
  // a가 더 크면 a 반환 아니면 b 반환
  // ex) result[a]의 결과 값은 숫자임
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
