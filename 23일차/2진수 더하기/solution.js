// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  const dec1 = parseInt(bin1, 2);
  const dec2 = parseInt(bin2, 2);
  const sum = Number(dec1) + Number(dec2);

  return sum.toString(2);
}

solution("10", "11");
