// function chunk(array, size) {
//   const subArr = array
//   console.log(subArr);
//   return subArr;
// }

// function chunk(array, size) {
//   const rows = Math.ceil(array.length / size);
//   let twoDArray = [];
//   for (let i = 0; i < rows; i++) {
//     twoDArray[i] = [];
//     for (let j = 0; j < size; j++) {
//       const index = i * size + j;
//       if (array[index] !== undefined) {
//         twoDArray[i][j] = array[index];
//       }
//     }
//   }
//   return twoDArray;
// }

function chunk(array, size) {
  let twoDArray = [];

  for (let i = 0; i < array.length; i += size) {
    let chunked = array.slice(i, i + size);
    twoDArray.push(chunked);
  }

  return twoDArray;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
