//https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let answer = 0;
  const t = s.split(" ");
  for (let i = 0; i < t.length; i++) {
    if (!isNaN(t[i])) {
      answer = answer + Number(t[i]);
    } else if (t[i] == "Z") {
      answer = answer - Number(t[i - 1]);
    }
  }

  return answer;
}
