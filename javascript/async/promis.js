// 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
// 기능 수행 정상 -> success 전달
// 기능 수행 실패 -> error 전달

'use strict';

// Promise is a JavaScript Object for asynchronous operation.
// State(상태), Pruducer(생성자), Consumer(소비자)
// state: pending -> fulfilled or reject


// 1. Producer
// when new Promise is created, the executor runs automatically. !!!
const promis = new Promise((resolve, reject) => {
  // doing some heavy work (network, files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    //reject(new Error('no network'))
  }, 2000);
});

// 2. Consumers: then, catch, finally -> chaining
promis
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber //
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    });
  })
  .then(num => console.log(num));
