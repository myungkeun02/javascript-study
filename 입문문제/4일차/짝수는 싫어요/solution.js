// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  const answer = [];
  
  for(i=0; i<n+1; i++){
      if(i%2 == 1){
          answer.push(i);
      }
  }
  
  return answer;
}