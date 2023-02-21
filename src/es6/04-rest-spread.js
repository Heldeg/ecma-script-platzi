// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b);
// object destructuring
let user = { username: 'oscar', age: 34 }
let { username, age } = user

console.log(username, age);


//spread operator

let person = { name: 'oscar', age: 28 };
let country = 'MX'

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]
}

sum(1, 1, 2, 3);

//curiosidad

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)