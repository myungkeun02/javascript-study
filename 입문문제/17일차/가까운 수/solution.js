//https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let answer = Math.max(...array);
  let minDif = Math.abs(answer - n);

  array.map((value) => {
    const dif = Math.abs(value - n);
    if (dif < minDif || (dif === minDif && value < answer)) {
      answer = value;
      minDif = dif;
    }
  });

  return answer;
}
