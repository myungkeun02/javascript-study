//https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  var answer = 0;
  s1.map((a) => {
    s2.map((b) => {
      if (a == b) {
        answer++;
      }
    });
  });
  return answer;
}
