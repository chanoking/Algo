function solution(my_string){
    let answer = '';
    answer = my_string.toLowerCase().split('').sort().join('');

    return answer;
}
console.log(solution("Bcad"));