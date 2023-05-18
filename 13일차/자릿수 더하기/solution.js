//https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
    var answer = 0;
    const number = String(n);
    [...number].map((a)=>{
        const b = Number(a);
        answer = answer + b;
    })
    return answer;
}