// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const [l1, l2, l3] = lines;

  const createArr = (line) => {
    const arr = [];
    arr.push();
    for (let i = line[0]; i < line[1]; i++) {
      arr.push(i + 0.5);
    }
    return arr;
  };

  const d1 = createArr(l1).filter((it) => createArr(l2).includes(it));
  const d2 = createArr(l1).filter((it) => createArr(l3).includes(it));
  const d3 = createArr(l2).filter((it) => createArr(l3).includes(it));
  const result = [...new Set([...d1, ...d2, ...d3])];
  return result.length;
}
