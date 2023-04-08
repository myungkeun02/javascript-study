//https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  var answer = [];
  var a = num_list.map(num=>{
      answer.unshift(num);
  })
  return answer;
}