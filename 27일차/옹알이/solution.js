//https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  var answer = 0;
  const pronunciation = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let world = [...babbling[i]].join("");

    for (let j = 0; j < pronunciation.length; j++) {
      world = world.replace(pronunciation[j], 0);
    }

    if (isNaN(Number(world))) {
    } else if (world == "0e0") {
    } else {
      answer++;
    }
  }

  return answer;
}
