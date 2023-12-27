// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  var answer = 0;
  array.map((i) => {
    let result = 0;
    [...String(i)].map((j) => {
      if (j === "7") {
        result++;
      }
    });
    answer = answer + result;
  });
  return answer;
}
