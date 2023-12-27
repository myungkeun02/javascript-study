// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  const copy = [a, b];

  for (let i = 2; i <= a; i++) {
    if (copy[0] % i === 0 && copy[1] % i === 0) {
      copy[0] /= i;
      copy[1] /= i;
      i--;
    }
  }
  let mom = copy[1];

  while (mom % 2 === 0) {
    mom /= 2;
  }

  while (mom % 5 === 0) {
    mom /= 5;
  }

  return mom === 1 ? 1 : 2;
}

solution();
