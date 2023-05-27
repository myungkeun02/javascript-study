//https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
