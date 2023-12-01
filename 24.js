function solution(name, yearning, photo){
    const nameToYearning = new Map();
    for (let i = 0; i < name.length; i++){
        nameToYearning.set(name[i], yearning[i]);
    } 

    const result = [];
    for (let i = 0; i < photo.length; i++){
        let totalScore = 0;
        for(const person of photo[i]){
            totalScore += nameToYearning.get(person) || 0;
        }
        result.push(totalScore);
    }
    return result;
}
console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));