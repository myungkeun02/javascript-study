// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let index = 0;

  for (let i = 0; i < k; i++) {
    index += 2;
    if (index > numbers.length) {
      index -= numbers.length;
    }
  }
  return numbers[index - 2];
}
