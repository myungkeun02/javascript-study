//https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  let result = 0;
  let max = 0;
  for(let i = 0; i < numbers.length; i++){
      max += numbers[i];
  }
  result = max/numbers.length;
  return result;
}