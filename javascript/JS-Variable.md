# JavaScript 강의 노트
> 이 노트는 엘리의 드림코딩 콘텢츠 중 자바스크립트에 대한 강의에 대한 학습 내용을 기록한 노트임

## asyn, defer 그리고 'use district'
- 'use district' : 항상 사용하는 것을 추천
- `<script>` 추가는 다음과 같은 조합으로 사용할 것
  - `<head>` + `<script defer>` : html 파싱 중에 script 다운로드 파싱 완료 후 script 실행
## 데이터 타입(data types), let vs var, hoisting

### 변수는 let을 사용하라
```javascript
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
```

### var는 사용하지 마라.
- var hoisting
- no block scope

### Constants
선언된 이후에 값이 항상 유지된다. 즉 값 변경이 불가능하다.
immutable

favor immutable data type always for a few resons:
- security
- thread safety
- reduce human mistakes

```javascript
const daysInWeek = 7;
const maxNumber = 5;
```

### Variable Types
- primitive, single item: number, string, boolean, null, undefined, symbol
- object, box container
- function, first-class function

#### number type : 숫자형 데이터 
```javascript
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
```
#### string type : 문자열

```javascript
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
```

#### boolean
- false: 0, null, undefined, NaN, ''
- true: any other value
```javascript
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
```

#### null
명확하게 지정한 것
```javascript
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
```

#### undefined
선언은 되었지만 값이 비워져 있음.
```javascript
let x;
console.log(`value: ${x}, type: ${typeof x}`);
```

#### symbol
create unique identifiers for objects
고유한 식별자가 필요한 경우 사용
```javascript
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
```

#### object

```javascript
// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
console.log(`value: ${ellie}, type: ${typeof ellie}`);
```

### Dynamic Typing: dynamical typed language
```javascript
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
```
위 예제처럼 처음 사용한 string type이 이후에는 number type으로 변경됨.
이와 같이 문제의 소지가 있음 => TypeScript가 나타남.