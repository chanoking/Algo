function maxChar(str) {
  var obj = {};
  var arr = [];
  for (let s of str) {
    if (!obj[s]) {
      obj[s] = 1;
    } else {
      obj[s]++;
    }
    console.log(obj);
    arr.push(obj[s]);
    console.log(arr);
    if (Math.max(arr)) {
      //   console.log(Math.max(arr));
      return obj[s];
    }
    // console.log(obj[s]);
  }
}
console.log(maxChar("abcccccccd"));
