// function steps(n) {
//   const str = "#";
//   const blank = " ";
//   for (let i = 1; i <= n; i++) {
//     for (let j = n - 1; j <= n; j--) {
//       if (j > 0) {
//         console.log(str.repeat(i) + blank.repeat(i));
//       }
//       break;
//     }
//   }
// }

// function steps(n) {
//   const str = "#";
//   const blank = " ";
//   for (let i = 1; i <= n; i++) {
//     let step = str.repeat(i) + blank.repeat(n - i);
//     console.log(step);
//   }
// }
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    console.log(stair);
    for (let column = 0; column < n; column++) {
      // console.log(stair);
      if (column <= row) {
        // console.log(stair);
        stair += "#";
        // #
        // console.log(stair);
      } else {
        // console.log(stair);
        stair += " ";
        // console.log(stair);
      }
      //   console.log(stair);
    }
    // console.log(stair);
  }
}
steps(3);
