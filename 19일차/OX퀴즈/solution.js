// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const answer = quiz.map((q) => {
    const [a, op, b, _, c] = q.split(" ");

    if (op === "+") {
      return Number(a) + Number(b) === Number(c) ? "O" : "X";
    } else {
      return Number(a) - Number(b) === Number(c) ? "O" : "X";
    }
  });
  console.log(answer);
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
