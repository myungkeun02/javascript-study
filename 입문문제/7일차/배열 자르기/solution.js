// https://school.programmers.co.kr/learn/courses/30/lessons/120833

function solution(numbers, num1, num2) {
  return numbers.filter((v, i) => i >= num1 && i <= num2);
}
