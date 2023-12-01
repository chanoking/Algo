function reverseInt(n) {
  let char = n.toString();
  let reversed = char.split("").reverse().join("");
//   console.log(reversed);
  let answer = parseInt(reversed);
//   console.log(answer);
  if (n > 0) {
    return answer;
  } else {
    return -answer;
  }
}

reverseInt(-15);
console.log(answer);
