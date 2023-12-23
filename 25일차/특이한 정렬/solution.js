// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  var result = [];
  const points = [];
  for (let j = 0; j < numlist.length; j++) {
    points.push(Math.abs(numlist[j] - n));
  }
  console.log(points);
  const min = Math.min(...points);

  const point = points.indexOf(min);
  result.push(numlist[point]);
  for (let i = 1; i < numlist.length; i++) {
    if (numlist[point + i] > numlist[point - i]) {
      result.push(numlist[point + i]);
      result.push(numlist[point - i]);
    } else {
      result.push(numlist[point - i]);
      result.push(numlist[point + i]);
    }
  }

  const answer = result.filter((item) => {
    return item !== undefined;
  });
  console.log(answer);
  return answer;
}

//numlsit에서 n가 가까운 위치에 있는 숫자를 순서대로 return 거리가 같다면 더 큰 수를 앞에 오도록 함

solution([1, 2, 3, 4, 5, 6], 4);
