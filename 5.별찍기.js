function starTree(level){
  let tree = ''; //1~5층까지 완성된 별 트리를 담을 변수

  // level: 층수만큼 반복
  for(let i = 1; i <= level; i++){
    let star = '';
    //공백 찍기
    for(let j = 1; j <= level - i; j++){
      star = star + ' ';
    }

    // 별 찍기
    for(let k = 1; k <= 2 * i - 1; k++){
      star = star + '*';
    }

    // \n은 다음 칸으로 넘어가기 위함
    tree = tree + star + '\n';
  }

  console.log(tree);
}


//5층으로 된 별 트리 만들기
starTree(5);

// 7층 트리
starTree(7);


