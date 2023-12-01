function solution(X, Y) {
  let answer = "";
  const arrX = X.split("");
  //   console.log(arrX);
  const arrY = Y.split("");
  //   console.log(arrY);
  const yObj = {};

  arrY.sort((a, b) => b - a);
  //   console.log(arrY);

  arrY.forEach((y) => {
    if (yObj[y] === undefined) yObj[y] = 1;
    else yObj[y]++;
    console.log(yObj[y]);
  });
  arrX.forEach((x) => {
    if (yObj[x] !== undefined && yObj[x] !== 0) {
      yObj[x]--;
      // console.log(yObj[]);
      answer = answer.concat(x);
      console.log(answer);

      if (!answer.length) answer = "-1";
      if (answer[0] === 0) answer = "0";
      else answer;
    }
  });
  console.log(answer);
  return answer;
}

console.log(solution("5525", "1255"));

