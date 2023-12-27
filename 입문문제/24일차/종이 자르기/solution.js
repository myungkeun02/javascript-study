// https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M, N) {
  const colCount = M - 1;
  const rowCount = (N - 1) * M;
  return colCount + rowCount;
}
