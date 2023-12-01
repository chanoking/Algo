function solution(babbling){
    var ans = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word =>{
        if(regex.test(word)) ans++;
    });
    return ans;
}
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));