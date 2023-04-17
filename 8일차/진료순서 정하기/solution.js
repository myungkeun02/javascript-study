// https://school.programmers.co.kr/learn/courses/30/lessons/120835

const solution = (emergency) => {
  const answer = [];
  for (let i = 0; i < emergency.length; i++) {
    let j = 1;
    emergency.map((k) => {
      if (emergency[i] < k) {
        j++;
      }
    });
    answer.push(j);
  }
  return answer;
};
