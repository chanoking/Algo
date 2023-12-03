// function matrix(n) {
//   let space = [];
//   const max = Math.pow(n, 2);
//   for (let i = 1; i <= max; i++) {
//     space.push([i]);
//   }
//   console.log(space);
// }
// matrix(4);

function matrix(n) {
  let matrixArray = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(count++);
    }
    matrixArray.push(row);
  }

  console.log(matrixArray);
}

// Example usage:
matrix(3);
