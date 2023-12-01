function solution(mystr, n){
    let answer = [];
    let strArr = mystr.split('');

    while(strArr.length > 0){
        answer.push(strArr.splice(0,n).join(''));
    }
    return answer;
}
console.log(solution("abc1Addfggg4556b", 6));