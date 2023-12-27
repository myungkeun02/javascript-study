// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  const strings = [...my_string];
  const answers = [];
  strings.map((i) => {
    for (j = 0; j < n; j++) {
      answers.push(i);
    }
  });
  const answer = answers.join("");
  return answer;
}
