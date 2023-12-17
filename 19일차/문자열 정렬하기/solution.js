// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const delete_null = my_string.split(" ");

  let result = Number(delete_null[0]);

  for (let i = 1; i < delete_null.length; i += 2) {
    const operator = delete_null[i];

    const operand = Number(delete_null[i + 1]);

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
    }
  }
  console.log(result);
  return result;
}
solution("3 + 5");
