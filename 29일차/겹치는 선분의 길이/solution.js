// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  var answer = 0;
  const [l1, l2, l3] = lines;

  const createArr = (line) => {
    const arr = [];
    for (let i = line[0]; i < line[1]; i++) {
      arr.push(lines[n][0]++);
    }
    return arr;
  };

  answer =
    answer +
    createArr(l1).filter((a) => {
      createArr(l2).includes(a);
    }).length;

  answer =
    answer +
    createArr(l1).filter((a) => {
      createArr(l3).includes(a);
    }).length;

  answer =
    answer +
    createArr(l2).filter((a) => {
      createArr(l3).includes(a);
    }).length;

  return answer;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);
