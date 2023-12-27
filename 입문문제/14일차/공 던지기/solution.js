// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  var answer = k * 2 - 1;
  for (answer; answer > numbers.length; ) {
    answer = answer - numbers.length;
  }
  return answer;
}
