//https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        count++;
      }
    }
    if (count == 1) {
      answer.push(s[i]);
    }
  }

  return answer.sort().join("");
}
