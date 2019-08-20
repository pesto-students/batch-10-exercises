When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
Would the following code work? If not, check out this function's test cases
and correct the function.

```js
function timeout(name) {
  return setTimeout(() => `Hello ${name}`, 300);
}
```