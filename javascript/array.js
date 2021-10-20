'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}

// b. for of
for (const fruit of fruits) {
  console.log(fruit);
}

// c. foreach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item from the end
fruits.push('mango', 'melon');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('melon');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift('melon');
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('melon', 'lemon', 'mango');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, '사과', '오렌지');
console.log(fruits);

// combine two arrays
const fruits2 = ['포도', '산딸기'];
const newFruits = fruits.concat(fruits, fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
// index of
console.log(fruits);
console.log(fruits.indexOf('사과'));

// includes
console.log(fruits.includes('mango'));
console.log(fruits.includes('수박'));

// lastIndexOf
fruits.push('사과');
console.log(fruits);
console.log(fruits.lastIndexOf('사과'));