class Person {
    name: string;
    private age: number;
    constructor(initName: string, initAge: number){
        this.name = initName;
        this.age = initAge;
    }

    incrementAge(){
        this.age++;
    }

    say (this: Person){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years olds.`);
    }



}

let person_class: Person;   //TSのclass定義はclassと同時に型も作る。
const shon = new Person('shona',22);
shon.incrementAge();
// shon.age; priveteはclass外の読み取りもできない
shon.say();



//初期化省略
// class Person {
//     constructor(public name: string, private age: number){

//     }
// }

class sports {
    constructor(public name: string, ){

    }
}