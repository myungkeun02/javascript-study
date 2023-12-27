// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  var answer = "";
  const strings = [...my_string];
  const arr = [];
  strings.map((i) => {
    if (i != letter) {
      arr.push(i);
    }
    answer = arr.join("");
  });
  return answer;
}
