function solution(arr, n){
    const result = [];
    const uniqueWords = arr.filter((item, index, arr) => arr.indexOf(item) === index);
    console.log(uniqueWords);
    const uniqueWord = arr.filter((item, index, arr) => arr.indexOf(item) !== index).join('');
    console.log(uniqueWord);
    return uniqueWords.sort((a, b) => a[n].localeCompare(b[n])).filter(word => word !== uniqueWord)
}

console.log(solution(["brush", "sun", "brush", "bed", "car"],1));
console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"], 0));