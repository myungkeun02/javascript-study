//https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  var answer = 0;
  array.map((a) => {
    if (a > height) {
      answer++;
    }
  });
  return answer;
}
