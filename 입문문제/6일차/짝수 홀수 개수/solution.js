// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  var answer = [0, 0];
  num_list.map((i) => {
    if (i % 2 == 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  });
  return answer;
}
