// function maxChar(str) {
//   var obj = {};
//   var arr = [];
//   for (let s of str) {
//     if (!obj[s]) {
//       obj[s] = 1;
//     } else {
//       obj[s]++;
//     }
//     console.log(obj);
//     arr.push(obj[s]);
//     console.log(arr);
//     if (Math.max(arr)) {
//       //   console.log(Math.max(arr));
//       return obj[s];
//     }
//     // console.log(obj[s]);
//   }
// }
// console.log(maxChar("abcccccccd"));

function maxChar(str) {
  var charMap = {};
  var maxChar = "";
  var maxCount = 0;

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }

    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));
