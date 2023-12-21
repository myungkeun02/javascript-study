// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let answer = 0;
  const result = [];
  let _i = i;
  for (_i; _i < j + 1; _i++) {
    result.push(String(_i));
  }
  const str = [...result.join("")];
  str.map((x) => {
    if (x == k) {
      answer++;
    }
  });
  console.log(answer);
  console.log(str);
  return answer;
}
