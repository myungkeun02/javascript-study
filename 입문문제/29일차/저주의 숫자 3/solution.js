//https://school.programmers.co.kr/learn/courses/30/lessons/120871#

function solution(n) {
  let answer = 0;
  answer = n;

  for (let i = 1; i <= answer; i++) {
    if (i % 3 == 0 || String(i).includes("3")) {
      answer++;
    }
  }

  return answer;
}
