//https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  let answer = [];
  let reverseString = my_string.split("").reverse();
  answer = reverseString.join("");
  return answer;
}
