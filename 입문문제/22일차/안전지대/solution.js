//https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  let result = board.map((v) => [...v]);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 1) {
        j == 0 ? undefined : (result[i][j - 1] = 1);
        j == board.length - 1 ? undefined : (result[i][j + 1] = 1);
        i == board.length - 1 ? undefined : (result[i + 1][j] = 1);
        i == board.length - 1 || j == 0
          ? undefined
          : (result[i + 1][j - 1] = 1);
        i == board.length - 1 || j == board.length - 1
          ? undefined
          : (result[i + 1][j + 1] = 1);
        i == 0 ? undefined : (result[i - 1][j] = 1);
        i == 0 || j == 0 ? undefined : (result[i - 1][j - 1] = 1);
        i == 0 || j == board.length - 1
          ? undefined
          : (result[i - 1][j + 1] = 1);
      }
    }
  }

  let answer = 0;

  result.map((arr) => {
    arr.map((obj) => {
      if (obj == 0) {
        answer++;
      }
    });
  });

  return answer;
}
