// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  let answer = "";
  [...rsp].map((i) => {
    if (i == 2) {
      answer = answer + "0";
    } else if (i == 0) {
      answer = answer + "5";
    } else {
      answer = answer + "2";
    }
  });
  return answer;
}
