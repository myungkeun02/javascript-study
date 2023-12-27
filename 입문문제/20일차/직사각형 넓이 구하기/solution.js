// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  const xd1 = dots[0][0] - dots[1][0];
  const xd2 = dots[0][0] - dots[2][0];
  const yd1 = dots[0][1] - dots[1][1];
  const yd2 = dots[0][1] - dots[2][1];

  const answer =
    Math.max(Math.abs(xd1), Math.abs(xd2)) *
    Math.max(Math.abs(yd1), Math.abs(yd2));
  return answer;
}
