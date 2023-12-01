function solution(n) {
    var ternaryString = '';

    while (n >= 1) {
        ternaryString = (n % 3) + ternaryString;
        n = Math.floor(n / 3);
    }

    const reversedTernaryArray = ternaryString.split('').reverse();
    let reversedDecimal = 0;
    
   for(let i = 0; i < reversedTernaryArray.length; i++){
       reversedDecimal += parseInt(reversedTernaryArray[i]) * Math.pow(3, i);
   }

    return reversedDecimal;
}

console.log(solution(45));