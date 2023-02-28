// # to indicate a private method

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #speak() {
        return 'Hello';
    }

    greting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }

}


const bebeloper1 = new user('david', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);