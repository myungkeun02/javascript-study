//https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  const min = Math.min(...sides);
  const sum = sides[0] + sides[1];
  const max = Math.max(...sides);
  const numbersInRange = [];

  for (let i = max + 1; i < sum; i++) {
    numbersInRange.push(i);
  }
  const answer = numbersInRange.length + min;

  return answer;
}
