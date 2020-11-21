var hasValue = false;
var count = 10;
var float = .2;
var single = 'Hello TypeScript';
//型推論
var cool = 'suiron';
// オブジェクト
var person = {
    name: 'smith',
    age: 20
};
//ネスト
var person2 = {
    name: {
        first: 'test',
        last: 'rsst'
    },
    age: 123
};
//配列
var chai = ['milk', 'spice', 'tea'];
// ユニオン型
var chai2 = ['milk', 'spice', 'tea', 2];
// tuple(配列の長さ、型を厳しく指定)
var book = ['business', 1340, true];
//Enum(列挙型)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    price: 400,
    size: CoffeeSize.TALL
};
console.log(coffee);
