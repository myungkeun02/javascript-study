// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  var answer = 0;
  for (let i = 0; i < n + 1; i++) {
    if (n % i == 0) {
      answer++;
    }
  }
  return answer;
}
