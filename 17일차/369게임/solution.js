// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const str = order.toString();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "3" || str[i] === "6" || str[i] === "9") {
      count++;
    }
  }

  return count;
}

function solution(order) {
  const str = [...String(order)];
  const answer = str.filter((number) => number % 3 === 0);
  return answer.length;
}
