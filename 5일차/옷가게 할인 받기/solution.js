// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  if (price >= 100000 && price < 300000) {
    price = price * 0.95;
  } else if (price >= 300000 && price < 500000) {
    price = price * 0.9;
  } else if (price >= 500000) {
    price = price * 0.8;
  }
  return Math.floor(price);
}
