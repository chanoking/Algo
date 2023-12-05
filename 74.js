const dataOne = {
    data: 1234
}

const dataTwo = {
    data: 5678
}

dataOne.next = dataTwo;
console.log(dataOne.next);