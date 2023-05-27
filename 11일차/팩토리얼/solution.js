// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let answer = 1;
  for (let i = 1; i <= 10; i++) {
    answer *= i;
    if (answer == n) {
      return i;
    }
    if (answer > n) {
      return i - 1;
    }
  }
}


//재귀함수 이용