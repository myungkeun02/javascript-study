//https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  if (direction == "right") {
    let r = numbers[numbers.length - 1];
    numbers.pop();
    numbers.unshift(r);
  } else {
    let l = numbers[0];
    numbers.shift();
    numbers.push(l);
  }
  return numbers;
}
