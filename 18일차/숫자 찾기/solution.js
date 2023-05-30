//https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  var answer = -1;
  const str = [...String(num)];
  str.map((n, idx) => {
    if (n == k && answer == -1) {
      answer = idx + 1;
    }
  });
  return answer;
}
