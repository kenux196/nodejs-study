'use strict'

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);


// 2. Numeric Operators


// 3. Incremet and decrement operator (++, --)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or) , && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(`π`);
  }
  return true;  
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// λ¬Έμμ΄μ΄λ  μ«μλ  μκ΄μμ΄ λμΌ νμμΌλ‘ λ³νν΄μ κ²μ¬νλ€.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// νμμ΄ λ€λ₯΄λ©΄ λ€λ₯Έ λ°μ΄ν°κ° λλ€. λΉκ΅λ μ΄κ²μ μ¬μ©νλλ‘ νλ€.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false)
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else


// 9. Ternary operator: ? (3ν­ μ°μ°μ)
// condition ? value1 : value2;

// 10. switch

// 11. loops
// while loop, while the condition is truthy,
// body code is executed.
while (condition) {
  
}

// do while loop,
do {

} while (condition)

// for loop, for(begin; condition; step)
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// break, continue  
