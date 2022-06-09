let a = 5;
let b = [];
let result = '';

while(a){
  b.push(a % 2); // a가 4일 때 처음에 0 을 배열에 넣는다
  a = parseInt(a / 2, 10); // a를 2로 나눈 값을 10진수로 다시 // 4 -> 2
}

b.reverse();

b.forEach((i) => {
  result += i;
});


console.log(result);