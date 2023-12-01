function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    // console.log(n + '------');
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      // console.log(j);
      if (j * j == n) {
        count++;
        // console.log(count + "_____");
      } else if (n % j == 0) count += 2;
      console.log(count);
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

console.log(solution(5, 3, 2));
