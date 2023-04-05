//https://school.programmers.co.kr/learn/courses/30/lessons/120583


function solution(array, n) {
  const newArray = array.filter(function(element){
      return element == n;
  });
  let answer = newArray.length;
  return answer;
}