// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let coupon = chicken,
    serviceChicken = 0;

  while (coupon >= 10) {
    const newChicken = Math.floor(coupon / 10);
    serviceChicken += newChicken;
    coupon = (coupon % 10) + newChicken;
  }
  return serviceChicken;
}
