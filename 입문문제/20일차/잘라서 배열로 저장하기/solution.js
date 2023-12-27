// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  let answer = [];
  let arr = [...my_str];

  while (arr.length > 0) {
    answer.push(arr.splice(0, n).join(""));
  }

  return answer;
}
