// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const maxNumbers = numbers.sort((a, b) => {
    return b - a;
  });
  return maxNumbers[0] * maxNumbers[1];
}
