// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  var answer = 0;
  if (common[1] - common[0] === common[2] - common[1]) {
    const op = common[1] - common[0];
    answer = common[common.length - 1] + op;
  } else {
    if (common[1] > common[0]) {
      const op = common[1] / common[0];
      answer = common[common.length - 1] * op;
    } else {
      const op = common[0] / common[1];
      answer = common[common.length - 1] / op;
    }
  }
  return answer;
}

solution([8, 4, 2]);
