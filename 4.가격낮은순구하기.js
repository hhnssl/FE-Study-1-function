'use strict'

// product 할당부분은 복붙해놓고 시작~ 
let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 32000, title: 'Check Shirt' },
  { id: 2, price: 15000, title: 'Black Tie' },
  { id: 3, price: 67000, title: 'Springfield Shirt' },
  { id: 4, price: 82000, title: 'Red Mini Dress' },
];

// 함수 선언
const lowToHigh = function (){
  //lowToHigh 함수가 실행되면, products를 정렬하는 sort 메소드를 실행한다.
  // sort 함수는 원본 배열을 실제로 변경시키므로 사용에 주의해야 함!
  products.sort( (a, b) => {
    // a.price - b.price의 결과가 음수이면 b.price를 오른쪽으로 보내고
    // 결과가 양수이면, a.price를 오른쪽으로 보낸다.
    return a.price - b.price;
  });

  // 결과 확인
  console.log(products);
};


// 함수 호출
lowToHigh();