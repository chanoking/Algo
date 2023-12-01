function solution (s,n){
    var answer = '';
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        const charCode = char.charCodeAt(0);

        if(charCode >= 65 && charCode <= 90){
            const shiftedCharCode = ((charCode - 65 + n)% 26) + 65;
            answer += String.fromCharCode(shiftedCharCode)
        } else if(charCode >= 97 && charCode <= 122){
            const shiftedCharCode = ((charCode - 97 + n)% 26) + 97;
            answer += String.fromCharCode(shiftedCharCode)
        } else{
            answer += char;
        }
    }
    return answer;
}
console.log(solution("AB",1));
console.log(solution("z",1));
console.log(solution("a B z",4));