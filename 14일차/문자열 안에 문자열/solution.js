//https://school.programmers.co.kr/learn/courses/30/lessons/120908

function solution(str1, str2) {
  var answer = 1;
  if(str1.indexOf(str2) === -1){
      answer = 2;
  }
  return answer;
}