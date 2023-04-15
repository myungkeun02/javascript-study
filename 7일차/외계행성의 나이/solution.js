//https://school.programmers.co.kr/learn/courses/30/lessons/120834


function solution(age) {
  const k = ['a','b','c','d','e','f','g','h','i','j'];
  let answer ='';
  age = age.toString();
  for (i=0; i<age.length; i++){
      answer += k[age[i]];
  }
  return answer;
}