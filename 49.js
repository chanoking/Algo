function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      //   console.log(stack);
      //   console.log('-------------');
      stack.sort((a, b) => a - b);
      //   console.log(stack);
      //   console.log('------------');
    } else {
      stack.push(c);
      //   console.log(stack);
      //   console.log("------------");
      stack.sort((a, b) => a - b);
      //   console.log(stack);
      //   console.log("------------");
      stack.shift();
      //   console.log(stack);
      //   console.log("------------");
    }
    // console.log(stack[0]);
    a.push(stack[0]);
    console.log(a);
    return a;
  }, []);
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
