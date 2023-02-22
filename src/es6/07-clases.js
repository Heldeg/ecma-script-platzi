// declarando
class User {

}

// instancia
// const newUser = new User();


class user {
    // metodos

    greting() {
        return 'Hello';
    }
};


const gndx = new user();

console.log(gndx.greting());


const bebeloper = new user();
console.log(bebeloper.greting());

// constructor

class user {
    //constructor 
    constructor(){
        console.log('nuevo usuario');
    }

    greting() {
        return 'Hello';
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'Hello';
    }

    greting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');

console.log(ana.greting());







class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }

    greting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }

}


const bebeloper1 = new user('david', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);