// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  const answer = [];
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return answer.from({ length: num }, (_, i) => i + min);
}
