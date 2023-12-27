// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  const answer = [];
  numlist.map((num) => {
    if (num % n == 0) {
      answer.push(num);
    }
  });
  return answer;
}
