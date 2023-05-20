// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  var answer = [];
  [...my_string].map((a) => {
    if (a === a.toUpperCase()) {
      answer.push(a.toLowerCase());
    } else {
      answer.push(a.toUpperCase());
    }
  });
  return answer.join("");
}
