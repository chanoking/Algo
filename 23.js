function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    let de = arr.splice(num1, 1)[0];
    console.log(de);
    let de1 = arr.splice(num2 - 1, 1)[0]; // Subtract 1 from num2 to adjust the index
    console.log(de1);
    arr.splice(num2 - 1, 0, de); // Subtract 1 from num2 to adjust the index
    arr.splice(num1, 0, de1);
    return arr.join('');
}

console.log(solution("hello", 1, 2));
