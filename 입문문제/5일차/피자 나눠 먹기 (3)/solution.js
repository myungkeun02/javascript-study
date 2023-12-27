//https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  var answer = 1;
  for (i = slice; i < n; i = i + slice) {
    answer++;
  }
  return answer;
}
