function solution(arr1, arr2) {
    var answer = []
    let newArr = [].concat(...arr1);
    let newArr2 = [].concat(...arr2);
    for(let i = 0; i < newArr.length; i++){
           answer.push(newArr[i] + newArr2[i])
        }
    
    return answer;
}