//https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  let result;
  
  if (angle > 0 && angle <90){
    result = 1;
  }
  else if(angle == 90){
    result = 2;
  }
  else if(angle > 90 && angle < 180){
    result = 3;
  }
  else if(angle == 180){
    result = 4;
  }
  else{result = null;}
  
  return result;
}