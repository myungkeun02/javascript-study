// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const splited = polynomial.split(" + "); // ['3x', '7', 'x']
  let xValue = 0;
  let value = 0;
  splited.map((term) => {
    const type = Number(term);
    if (isNaN(type)) {
      const termString = term.split("x").join("");
      let returnNum = 0;
      if (termString == "") {
        returnNum = 1;
      } else {
        returnNum = Number(termString);
      }
      xValue = xValue + returnNum;
    } else {
      value = value + type;
    }
  });

  if (xValue == 0) {
    return String(value);
  } else if (value == 0) {
    if (xValue == 1) {
      return "x";
    } else {
      return `${xValue}x`;
    }
  } else {
    if (xValue == 1) {
      return `x + ${value}`;
    } else {
      return `${xValue}x + ${value}`;
    }
  }
}
