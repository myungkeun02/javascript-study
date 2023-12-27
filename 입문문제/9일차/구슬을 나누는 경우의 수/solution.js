// https://school.programmers.co.kr/learn/courses/30/lessons/120840

const factorial = (num) => {
  let returnFactorial = BigInt(1);
  for (let i = num; i >= 2; i--) {
    returnFactorial *= BigInt(i);
  }
  return returnFactorial;
};

function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
