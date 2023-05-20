//https://school.programmers.co.kr/learn/courses/30/lessons/120909
// 1. 반복문 사용
function solution(n) {
  var answer = 2;
  for(let i =1; i<n; i++){
      let j = i*i;
      if(n == j){
          answer = 1;
          break;
      }
  }
  return answer;
  
}


// 2. 구글링으로 찾은 sqrt를 사용 (제곱근)
function solution(n) {
  var answer =0;
  if(Math.sqrt(n)%1 == 0){
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

