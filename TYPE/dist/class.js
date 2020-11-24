"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    say() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const shon = new Person('shona');
shon.say();
