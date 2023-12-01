const strings = ["sun", "bed", "car"];
const n = 1;
let updatedArr = strings.sort();
let againArr = updatedArr.sort((a, b) => a[n].localeCompare(b[n]))
console.log(againArr);