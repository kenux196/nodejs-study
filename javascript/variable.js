
// 1. Use strict
// added in ES 5
// use this for vanila Javascript.
'use strict';


// 2. Variable, rw(read / write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'kenux';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
// 그래서 var는 사용하지 않도록 한다.
console.log(age)
age = 4;
console.log(age)
var age;


// 3. Constant r(read only)
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few resons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// - primitive, single item: number, string, boolean, null, undefined, symbol
// - object, box container
// - function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - specical numeric values: infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123123812387129379182379127391273912379n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(Number.MAX_SAFE_INTEGER);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
console.log(`value: ${ellie}, type: ${typeof ellie}`);


// 5. dynamic typing
let text = 'hello'
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)) // error 발생
// 위 예제처럼 처음 사용한 string type이 이후에는 number type으로 변경됨.
// 이와 같이 문제의 소지가 있음 => TypeScript가 나타남.