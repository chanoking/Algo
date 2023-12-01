const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let row = 0; row > array.length; row++){
    for (let col = 0; col < array[row].length; col++){
        console.log(array[row][col]);
    }
}