//https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  var answer = [];
  var numString = my_string.trim().replace(/[^0-9]/g, "");
  for (let i = 0; i < numString.length; i++) {
    answer.push(Number(numString[i]));
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}
