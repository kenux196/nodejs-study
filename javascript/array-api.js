'use strict';

//  Q1. 배열을 스트링으로 바꾸라
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits);
  console.log(fruits.join(','))
  console.log(fruits.join(' and '));
  console.log(fruits.join());
}

// Q2. String을 배열로
{
  const fruits = 'apple, banana, orange';
  const result = fruits.split();
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(0, 2); // 원본 배열에는 영향 없이 새로운 배열 생성
  console.log(result);
  console.log(array)
  const result2 = array.splice(0, 2); // 원본 배열에 변경이 발생
  console.log(result2)
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 
{
  const result = students.find(student => student.score === 90);
  console.log(result);
  console.log(result.name);
}

// Q6. make and array of enrolled students
{
  const result = students.filter(student => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the student's scores
{
  const result = students.map(student => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some(student => student.score < 50);
  console.log(result);
  const result2 = !students.every(student => student.score >= 50);
  console.log(result2);
}

// Q9. Compute student's average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / 5);
}

// Q10
{
  // Java의 스트림과 비슷하다.
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}