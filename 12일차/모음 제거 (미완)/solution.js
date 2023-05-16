//https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const strings = [...my_string];
  var answer = [];
  const mo = ['a','e','i','o','u'];
  strings.map((a)=>{
      for(let i =0; i<mo.length; i++){
          if(a =! mo[i]){
              answer.push(a)
          }
      }
  })
  return answer;
}