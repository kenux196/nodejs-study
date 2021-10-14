'use strict'
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing (하나의 함수는 하나의 일만 하도록 작게)
// naming: doSomething, command, verb
// function is object in JS (자바스크립트에서 함수도 객체이다.)
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello world');
log(123);

// 2. Parameters
// premitive parameters: passed by value (값 전달)
// object parameters: passed by reference (참조로 전달)
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
log(ellie);

// 3. Default parameter (added in ES6) ***
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) ***
// 여러 개의 파라미터를 배열형태로 전달.
// ...args 형태로 표기
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg)
  }

  args.forEach(arg => console.log(arg));
}
printAll('dream', 'miracle morning', 'kenux', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // local variable
  console.log(message)
  console.log(globalMessage)
}
printMessage();
// console.log(message); // message is local variable in printMessage function.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`)

// 7. Early return, ealry exit
// 함수 안에서 로직이 길어지져서 가독성 나쁜 것보다는
// 조건이 만족하면 빨리 리턴하고 함수를 나가는 것이 좋다.
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function : 일급 시민
// functions are treated like any other variable
// can be assigned as a value to variable (함수를 변수에 할당 가능)
// can be passed as an argument to other functions. (다른 함수의 파라미터로 함수를 전달 가능)
// can be returnd by another function (리턴 값으로 함수 가능)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
}
// named function
// better debugging in debgger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint~');
}

const simplePrint2 = () => console.log('simplePrint~');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}