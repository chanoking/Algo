const stack = [1, 2, 3, 4, 5];
const one = stack.shift();
// console.log(one);

function match(a, b, c) {
  if ((a > b) & c) {
    return true;
  }
}

console.log(match(5, 1, 2));
