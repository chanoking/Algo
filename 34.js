function solution(arr, n) {
    let uniqueWord = new Set();  // 중복되지 않은 단어를 저장할 Set
    const uniqueWords = arr.filter((item, index, arr) => arr.indexOf(item) === index);  // 중복되지 않은 단어들의 배열
    let duplicatedWord = '';  // 중복된 단어를 저장할 변수

    // arr 배열을 순회하면서 중복된 단어 하나를 찾기 위한 반복문
    for (let word of arr) {
        if (uniqueWord.has(word)) {  // 이미 uniqueWord Set에 있는 단어라면 중복된 단어로 처리
            duplicatedWord = word;
            break;
        }
        uniqueWord.add(word);  // uniqueWord Set에 단어를 추가하여 중복 체크
    }

    // 중복되지 않은 단어 배열을 주어진 인덱스에 따라 정렬하고, 중복된 단어를 제외한 결과를 반환
    return uniqueWords.sort((a, b) => a[n].localeCompare(b[n])).filter(word => word !== duplicatedWord);
}

console.log(solution(["brush", "sun", "brush", "bed", "car"], 1));
console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"], 0));
console.log(solution(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"],2));
