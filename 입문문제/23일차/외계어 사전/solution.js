// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  const isSameExist = dic
    .filter((str) => str.length === spell.length)
    .some((str) => {
      const isSame = spell.every((s) => {
        return str.includes(s);
      });
      return isSame;
    });

  return isSameExist ? 1 : 2;
}

// spell에 담긴 알파벳을 모두 사용한 단어가 dic에 존재할경우 1리턴 아니면 2리턴
