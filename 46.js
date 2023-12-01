function solution(s) {
  const result = [];
  const charIndices = {}; // 각 문자의 인덱스를 저장하는 객체

  // 문자열을 왼쪽에서 오른쪽으로 순회
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // console.log(char);
    // 이전에 나온 같은 문자의 인덱스를 확인
    // console.log(charIndices[char]);
    if (charIndices[char] === undefined) {
    //   console.log(charIndices[char]);
      result.push(-1);

      //   console.log(result);
    } else {
      // 현재 문자와 같은 문자가 이전에 나온 위치까지의 거리를 계산
      const distance = i - charIndices[char];
    //   console.log(charIndices[char]);
      //   console.log(distance);
      result.push(distance);
    }

    // 현재 문자의 인덱스를 저장
    charIndices[char] = i;
    // console.log(i);
    console.log(charIndices[char]);
  }

  return result;
}

// console.log(solution("banana"));
console.log(solution("sports"));
