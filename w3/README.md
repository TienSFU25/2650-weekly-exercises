NOTE: You can write Javascript for either the Browser environment or the NodeJS environment for this exercise. For the former, you can run the JS by throwing it into a `script` tag in an HTML file. For the latter, you can execute it directly `node e3.js`.

For this week, create a brand new repo. You will push to this repo some `.js` files, with a `.txt` file for the "what do these programs do" questions.

### Q1: Scopes/Closures [6 points]

What do these programs do? Explain in your own words. Be precise. **2 points each**

a.

```js
let x = 1;

const foo = () => {
  x = 2;
  return () => {
    console.log(x);
  };
};

foo()();
console.log(x);
```

b.

```js
var items = [1, 2, 3];
var result = [];

for (var i = 0; i < 3; i++) {
  result.push(() => items[i]);
}

console.log(result.map((x) => x()));
```

c. What if we change the var i to let?

d.

```js
var items = [1, 2, 3];
var result = [];

for (var i = 0; i < 3; i++) {
  result.push(
    (
      (x) => () =>
        items[x]
    )(i)
  );
}

console.log(result.map((x) => x()));
```

### Q2: Async programming [6 points]

Consider the following code (thanks [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function))

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}
```

Describe what happens in the following scenarios **[2 points each]**

a.

```js
resolveAfter2Seconds();
resolveAfter1Second();

console.log(`done!`);
```

b.

```js
resolveAfter1Second();
resolveAfter2Second2();

console.log(`done!`);
```

c.

```js
await resolveAfter2Seconds();
resolveAfter1Second();

console.log(`done!`);
```

### Q3: Error handling with async/await [6 points]

Same idea as above, but let's reject our glorious Promises this time

```js
function rejectAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("slow");
    }, 2000);
  });
}

function rejectAfter1Second() {
  console.log("starting fast promise");
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("fast");
    }, 1000);
  });
}
```

a.

```js
console.log("== starting ==");

const slow = rejectAfter2Seconds();
const fast = rejectAfter1Second();

try {
  console.log(await fast);
} catch (e) {
  console.log(`it broke! ${e}`);
}

try {
  console.log(await slow);
} catch (e) {
  console.log(`it broke! ${e}`);
}

console.log("== done ==");
```

b.

```js
console.log("== starting ==");

const slow = rejectAfter2Seconds();
const fast = rejectAfter1Second();

try {
  console.log(await fast);
  console.log(await slow);
} catch (e) {
  console.log(`it broke! ${e}`);
}

console.log("== done ==");
```

c. Rewrite the above code so that both Promises are fired simultaneously, yet the same Error Handler is used. Put your code in `e3_q3c.js`

### Q4: Classes [3 points]

This class is not about OOP (and Javascript would not be the greatest place to practice such concepts anyways. You're better off using Typescript). But let's do one exercise related to Classes for good measure

Write an abstract class `Shape` that defines two abstract methods `area` and `perimeter`

Note: Javascript doesn't support abstract natively. You'll have to do something creative (i.e throw an `Error`) to make sure that `Shape` cannot be directly constructed

Write two "concrete" classes Square and Circle that implements `area` and `perimeter`

Put your code in `e3_q4.js`

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

### Q5: Functional programming [12 points]

a. Write a function `listApply(list, f)` that returns a new list after applying f to each element **[2]**

Example: `listApply([1, 2, 3], (x) => x + 1) // [2, 3, 4]`

Note: you aren't allowed to use `map` here. Use a basic for-loop!

b. Write another function `cadToUsd(usd: number) => number` **[1]**

c. Use `listApply` and `cadToUsd` to write `cadsToUsds` (note the plural). Use 0.73 as the conversion rate **[2]**

example: `cadsToUsds([1,2,3]) = [ 0.73, 1.46, 2.19 ]`

d. Use [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) to implement `every` **[3]**

`every([1,2,3], isOdd) // false`

`every([1,3,5], isOdd) // true`

e. Use the following `assert` "library" to write tests for each function in the previous 4 parts **[4]**

```js
function assert(value, message) {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEquals(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertListEquals(actual, expected, message) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error(message || `Expected both arguments to be arrays`);
  }
  if (actual.length !== expected.length) {
    throw new Error(
      message ||
        `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        message ||
          `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
    }
  }
}

assertListEquals(
  listApply([1, 2, 3], (x) => x + 1),
  [2, 3, 4]
);
assert(every([1, 3, 5], isOdd));
```

Make sure to use "pure" functions: no state changes!

Put all the Functional programming stuff in `e3_q5.js`

### Submission

**Submit on Brightspace a PDF with link to your Github repo, latest commit SHA and screenshot of your commit tree. See "Github convention" slide**
