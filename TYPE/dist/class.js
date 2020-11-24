"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age++;
    }
    say() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years olds.`);
    }
}
let person_class; //TSのclass定義はclassと同時に型も作る。
const shon = new Person('shona', 22);
shon.incrementAge();
// shon.age; priveteはclass外の読み取りもできない
shon.say();
