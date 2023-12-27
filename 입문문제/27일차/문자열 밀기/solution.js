// https://school.programmers.co.kr/learn/courses/30/lessons/120921
function solution(A, B) {
  var answer = 0;
  const string = [...A];
  if (A == B) {
    return answer;
  }
  for (let i = 0; i < A.length; i++) {
    string.unshift(string[A.length - 1]);
    string.pop();

    if (string.join("") == B) {
      answer++;
      break;
    } else {
      answer++;
    }

    if (string.length == answer) {
      answer = -1;
    }
  }
  return answer;
}
