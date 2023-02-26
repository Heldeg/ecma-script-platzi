async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');


function* anotherGenerator2() {
    yield 1
    yield 2
    yield 3
}

const other2 = anotherGenerator2();

console.log(other2.next());
console.log(other2.next());
console.log(other2.next());
console.log('Hello');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);

console.log('After');