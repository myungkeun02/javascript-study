//school.programmers.co.kr/learn/courses/30/lessons/120894

https: function solution(numbers) {
  const numString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numString.forEach((string, index) => {
    numbers = numbers.replaceAll(string, index);
  });
  return Number(numbers);
}
