//https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const strings = [...my_string];
  var answer = [];
  const mo = ["a", "e", "i", "o", "u"];
  strings.map((a) => {
    let j = 0;
    for (let i = 0; i < mo.length; i++) {
      if ((a = !mo[i])) {
        j++;
      }
    }
    if (j == mo.length) {
      answer.push(a);
    }
  });
  return answer.join("");
}
// 한혜정식 풀이

function solution(my_string) {
  const strings = [...my_string];
  var answer = [];
  const mo = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
  ];
  strings.map((a) => {
    for (let i = 0; i < mo.length; i++) {
      if (a == mo[i]) {
        answer.push(a);
      }
    }
  });
  return answer.join("");
}
//명근식 무지성 풀이

function solution(my_string) {
    const mo = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < mo.length; i++) {
        my_string = my_string.replaceAll(mo[i], "");
    }
    
    return my_string;
}
// 수정사항
