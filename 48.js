// function solution(a, b, n) {
//     let totalGetCola = 0;
//     let nowGetCola = 0;
//     let inputCola = n;

//     while (inputCola >= a) {
//         nowGetCola = parseInt(inputCola / a) * b
//         console.log(nowGetCola);
//         totalGetCola += nowGetCola
//         console.log('--------------');
//         console.log(totalGetCola);
//         inputCola = nowGetCola + inputCola % a
//         console.log('---------------');
//         console.log(inputCola);
//         console.log('---------------');
//     }
//     return totalGetCola;
// };



solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
console.log(solution(3, 1, 20));