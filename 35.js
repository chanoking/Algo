function solution(n){
    const middle = Math.floor(n / 2);

    for(let i = 0; i < n; i++){
        let row = '';
        const spaces = Math.abs(middle - i);
        const stars = n - 2 * spaces;

        for(let j = 0; j <spaces; j++){
            row += " ";
        }

        for(let j = 0; j < stars; j++){
            row += '*'
        }
    }

}
console.log(solution(5));