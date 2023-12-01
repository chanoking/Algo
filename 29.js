function solution(arr1, arr2){
    var result = [];
    for(let i = 0; i < arr1.length; i++){
        var row = [];
        for(let j = 0; j < arr1[0].length; j++){
            row.push(arr1[i][j] + arr2[i][j])
        }
        result.push(row)
    }
    return result;
}

console.log(solution([[1,2],[2,3]],	[[3,4],[5,6]]));