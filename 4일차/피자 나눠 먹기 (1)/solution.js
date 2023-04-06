// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  let answer = 1;
  for(let i = 7; i<n; i=i+7){
      answer++
  }
  
  return answer;
}