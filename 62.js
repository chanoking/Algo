function solution(n, lost, reserve) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (lost.indexOf(i) < 0) {
      answer++;
    } else {
      if (reserve.indexOf(i - 1) >= 0 && lost.indexOf(i - 1) < 0) {
        answer++;
        reserve = reserve.filter((element) => element !== i - 1);
      } else if (reserve.indexOf(i + 1) >= 0 && lost.indexOf(i + 1) < 0) {
        answer++;
        reserve = reserve.filter((element) => element !== i + 1);
      } else if (reserve.indexOf(i) >= 0) {
        answer++;
        reserve = reserve.filter((element) => element !== i);
      } else {
        continue;
      }
    }
  }
  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
