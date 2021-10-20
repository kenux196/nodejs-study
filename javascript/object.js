'use strict';

// Objects
// one of the JavaScript's data type. 
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key: value };  오브젝트는 키-값의 집합이다.

// 1. Litterals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }
print(ellie);

// with JavaScript magic (dynamically typed language : 런타임에 동적으로 타입이 정의 된다.)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 키 값은 스트링으로해야 한다. => computed properties
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 실시간으로 원하는 값을 받아올 때, computed properties 사용
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('kenux', 44);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operatro: property existance check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'kenux', age: '33' }
const user2 = user;
user2.name = 'coder';
console.log(user);

const user3 = {};
Object.assign(user3, user);
console.log(user3);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'small' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed)