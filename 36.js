function solution(n) {
    for (let i = n; i >= 1; i--) {
        let stars = '*'.repeat(2 * i - 1);
        let spaces = ' '.repeat(n - i);
        console.log(spaces + stars);
    }

    for (let i = 2; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

solution(5);

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(' ');
//     const a = Number(n[0]), b = Number(n[1]);


//     for(let i=0; i<b; i++){
//         var star=" ";
//         for(let j=0; j<a; j++){
//             star += "*";

//         }console.log(star)
//     }
// });