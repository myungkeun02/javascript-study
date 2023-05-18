//https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  var answer = 0;
  const number  =['1','2','3','4','5','6','7','8','9',];
  [...my_string].map((a)=>{
      number.map((b)=>{
       if(a==b){
           answer = answer + Number(b);
       }   
      })
  })
  return answer;
}