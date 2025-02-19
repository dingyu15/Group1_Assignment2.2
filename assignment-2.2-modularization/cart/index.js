// 1. Import tax-calculator.js using CommonJS
const calculator = require("./tax-calculator.js");
console.log(calculator);

const cart = [
    {
        item:"Toy",
        price:29.90
    },
    {
        item:"Back Pack",
        price:59.90
    },
    {
        item:"Pencil Case",
        price:12.90
    }
];

cart.forEach(item, price => console.log());


// 2. Use array iteration method to produce an amount payable using the property "price".

// 3. Invoke tax calculator with the payable amount.