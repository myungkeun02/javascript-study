// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  let answer = 0;
  const arr = my_string.split(/[^0-9]/).filter(Boolean);
  arr.map((a) => {
    answer = answer + Number(a);
  });
  return answer;
}
