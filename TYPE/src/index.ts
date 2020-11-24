let hasValue: boolean = false;
let count: number = 10;
let float: number = .2;
let single: string = 'Hello TypeScript'

//型推論
let cool = 'suiron'

// オブジェクト
const person: {
    name: string;
    age: number
} = {
    name: 'smith',
    age: 20
}

//ネスト
const person2: {
    name:{
        first: string;
        last: string
    };
    age: number
} = {
    name:{
        first: 'test',
        last: 'rsst'
    },
    age:123
}

//配列
const chai: string[] = ['milk','spice','tea']
// ユニオン型
const chai2: (string | number)[] = ['milk','spice','tea',2]

// tuple(配列の長さ、型を厳しく指定)
const book: [string,number,boolean] = ['business', 1340, true];

//Enum(列挙型)
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE, 
    VENTI,
}

const coffee = {
    price: 400,
    size: CoffeeSize.VENTI
}

// Union型
let unionType: number | string = 19;
unionType = 'LAB';
unionType.toUpperCase();
let unionTypes: (number | string )[] = [234,'asd'];

// Literal型
const apple: 'apple' = 'apple';
let size: 'S' | 'M' | 'L' = 'L';
size;

//typeエイリアス(型の別名、変数のように振る舞う)
type ClothSize = 'S' | 'M' | 'L';
let clothSize: ClothSize = 'M';

//----------------------------------
//関数（引数には必ずtypeをつける）
//返り値は型推論がきく
//----------------------------------

function add(n1: number, n2: number): number{
    return n1 + n2
}
add(2,4);

// void
function sayHello(): void {
    console.log('hello');
} 

//callBack関数
function handle(num: number, callBack: (num: number) => number){
    const dobleNum = callBack(num * 2);
    console.log(dobleNum);
    
}
handle(10, dobleNum => {
    return dobleNum
});