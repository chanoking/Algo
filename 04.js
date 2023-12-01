const people = [
    { name: 'Kyle', age: 26 },
    { name: 'Kang', age: 31 },
    { name: 'Kane', age: 42 },
    { name: 'Sonny', age: 19 },
]

const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(result);