// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  let answer =
    Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3);
  return answer;
}
