function solution(array){
    return array.join('').split('7').length - 1;
}
console.log(solution([7, 6, 17]));