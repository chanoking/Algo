function solution(arr, n){
    var result = [];
    let uniqueWord = new Set();
    const uniqueWords = arr.filter((item, index, arr) => arr.indexOf(item) === index);
    let duplicatedWord = '';

    for(let word of arr){
        if(uniqueWord.has(word)){
            duplicatedWord = word;
            break
        }
        uniqueWord.add(word)
    }
    return uniqueWords.sort((a, b) => a[n].localeCompare(b[n])).filter(word => word !== duplicatedWord)

}



console.log(solution(["brush", "sun", "brush", "bed", "car"],1));
console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"], 0));