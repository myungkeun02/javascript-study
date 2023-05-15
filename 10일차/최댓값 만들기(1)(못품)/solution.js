// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const max = Math.max(...numbers)
  const filtered = numbers.filter((element) => element !== max);
  const secondMax = Math.max(...filtered)
  return max*secondMax;
}