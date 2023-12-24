// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  var answer = [];
  let rank = 1;
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][0] + score[i][1] < score[j][0] + score[j][1]) {
        rank++;
      } else if (score[i][0] + score[i][1] == score[j][0] + score[j][1]) {
        continue;
      }
    }
    answer.push(rank);
    rank = 1;
  }

  return answer;
}
