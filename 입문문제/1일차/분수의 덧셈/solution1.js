//https://school.programmers.co.kr/learn/courses/30/lessons/120808
//유클리드 호제법을 이용해 기약분수 만들기
function solution(denum1, num1, denum2, num2) {
  let topNum = num1*denum2 + num2*denum1
  let botNum = num1*num2
  let maximum;
  for(let i = 1 ; i <= topNum ; i ++) {
      if(topNum%i == 0 && botNum%i == 0) {
          maximum = i
      }
  }
  return [topNum/maximum, botNum/maximum]
}