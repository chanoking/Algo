function solution(arr1, arr2, signs){
    var result = [];
    for(let i = 0; i<arr1.length; i++){
        var row = [];
        for(let j = 0; j <arr1[0].length; j++){
            if(signs[i][j]===false){
                row.push(-(arr1[i][j]+arr2[i][j]))
            } else{
                row.push(arr1[i][j]+arr2[i][j])
            }
        }
        result.push(row)
    }
    return result;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]],[[true,true],[true,false]]));
console.log(solution([[1],[2]], [[3],[4]], [[false],[false]]));