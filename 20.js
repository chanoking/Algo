function solution(n, num_list){
    return num_list.filter(num => num % n === 0)
}
console.log(solution(2, [1,2,3,4,5,6,7,8,9,10]));