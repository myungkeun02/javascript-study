// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  let xMax = board[0] / 2;
  let yMax = board[1] / 2;

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && x + 1 < xMax) x++;
    if (keyinput[i] === "left" && x - 1 > -xMax) x--;

    if (keyinput[i] === "up" && y + 1 < yMax) y++;
    if (keyinput[i] === "down" && y - 1 > -yMax) y--;
  }

  return [x, y];
}
