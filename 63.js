function solution(s) {
  let count = 0;
  let answer = 0;
  let current;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else {
        count++;
      }
    }
  }
  return answer;
}

console.log(solution("aaabbaccccabba"));
