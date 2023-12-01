const items = [
    { name: 'Rice', price: 5 },
    { name: 'Book', price: 20 },
    { name: 'Chicken', price: 10 },
    { name: 'Monitor', price: 100 },
]

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price;
// })

const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`);
    console.log(`Item: ${item.pricel}`);
    return total + item.price
}, 0)

console.log(totalPrice);

