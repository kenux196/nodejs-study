// async & await
// clear style of use promis :)

'use strict';


// 1. async - async 키워드로 감사면 자동으로 promise로 전환이 된다.
async function fetchUser() {
    // do network request in 10 sec ...
    return 'kenux';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2 await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000)
  return 'banana';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruuits() {
  return Promise.all([getApple()], getBanana())
    .then(fruits => fruits.join('+')
    );
};
pickAllFruuits().then(console.log);