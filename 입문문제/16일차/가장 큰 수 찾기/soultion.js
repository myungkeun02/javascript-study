//https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  var answer = [0, 0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > answer[0]) {
      answer[0] = array[i];
      answer[1] = i;
    }
  }
  return answer;
}
