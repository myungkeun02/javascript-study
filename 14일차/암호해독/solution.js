//

function solution(cipher, code) {
  var answer = "";
  if (code == 1) {
    answer = cipher;
  } else {
    for (let i = 1; i < cipher.length; i++) {
      let key = cipher[code * i - 1];
      if (key === undefined) {
        break;
      } else {
        answer = answer + key;
      }
    }
  }
  return answer;
}
