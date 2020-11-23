"use strict";
let hasValue = false;
let count = 10;
let float = .2;
let single = 'Hello TypeScript';
//型推論
let cool = 'suiron';
// オブジェクト
const person = {
    name: 'smith',
    age: 20
};
//ネスト
const person2 = {
    name: {
        first: 'test',
        last: 'rsst'
    },
    age: 123
};
//配列
const chai = ['milk', 'spice', 'tea'];
// ユニオン型
const chai2 = ['milk', 'spice', 'tea', 2];
// tuple(配列の長さ、型を厳しく指定)
const book = ['business', 1340, true];
//Enum(列挙型)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    price: 400,
    size: CoffeeSize.VENTI
};
// Union型
let unionType = 19;
unionType = 'LAB';
unionType.toUpperCase();
let unionTypes = [234, 'asd'];
// Literal型
const apple = 'apple';
let size = 'L';
size;
let clothSize = 'M';
//----------------------------------
//関数（引数には必ずtypeをつける）
//返り値は型推論がきく
//----------------------------------
function add(n1, n2) {
    return n1 + n2;
}
add(2, 4);
// void
function sayHello() {
    console.log('hello');
}
//callBack関数
function handle(num, callBack) {
    const dobleNum = callBack(num * 2);
    console.log(dobleNum);
}
handle(10, dobleNum => {
    return dobleNum;
});
