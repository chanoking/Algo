function solution(quiz){
    return quiz
        .map((el) => el.split(" = "))
        .map((el) => {
            return eval(el[0]) == el[1] ? "O" : "X";
        });
}
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));