console.log('Hello Node.js');
console.log('Node.js 실습');

var workout = function () {};
console.log(workout instanceof Function);

// 함수가 생성자의 역할을 하는 경우 대문자로 시작해야 한다.
function User() {}
var user = new User();

// 함수 선언, 함수 표현식, new Function()
// 자바 스크립트에서 객체를 생성하는 방법
// 1. Object() 생성자 - 비추
var user = new Object();
user.name = 'Sunny';
user.interests = ['Traveling', 'Swimming'];
user.greeting = function () {
  console.log("Hi, I'm " + this.name + '.');
};
user.greeting();
console.table(user.interests);
// 2. 객체 리터럴
var user = {
  name: 'Sunny',
  interests: ['Traveling', 'Swimming'],
  greeting: function () {
    console.log("Hi, I'm " + this.name + '.');
  },
  get role() {
    return 'Engineer';
  },
};
user.greeting();
console.log(user.role);
// 3. 생성자 함수
function User(name, interests) {
  this.name = name;
  this.interests = interests;
  this.greeting = function () {
    console.log("Hi, I'm " + this.name + '.');
  };
}
var user = new User('Sunny', ['Traveling', 'Swimming']);
user.greeting();
// 4. Object.create()
// 5. 생성 함수
// 6. ES6의 클래스
class User1 {
  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  }
  greeting() {
    console.log("Hi, I'm " + this.name + '.');
  }
}
let user1 = new User1('kenux1', ['Coding', 'MSA']);
user1.greeting();
