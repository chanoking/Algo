function solution(k, m, score) {
  var answer = 0;
  var array = score.sort((a, b) => b - a);
  console.log(array);
  for (let i = m; i <= array.length; i = i + m) {
    answer += array[i - 1] * m;
    console.log(i);
  }
  return answer;
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
