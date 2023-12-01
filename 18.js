function solution(n, t){
    let answer = 0;
    answer = Math.pow(2, t) * n;
    return answer;
}
console.log(solution(2, 10));