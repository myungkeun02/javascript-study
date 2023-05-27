//https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      while (n % i == 0) {
        n = n / i;
      }
      answer.push(i);
    }
  }
  return answer;
}
// 소수 판별로직에 대한 정보를 찾아보아야함
