# Async/Await Examples

This folder contains examples that demonstrate how to use `async` and `await` in JavaScript for handling asynchronous operations. `async/await` provides a cleaner, more readable way to work with Promises, making asynchronous code look synchronous.

## Files and Their Descriptions

1. **`01-basic-async-await.js`**
   - Demonstrates the basic syntax and usage of `async` and `await`.
   - Shows how to use `await` to pause execution until a Promise resolves.
   - Ideal for beginners learning `async/await`.

2. **`03-non-blocking-async-example.js`**
   - Highlights JavaScript's non-blocking behavior with `async` functions.
   - Uses `setTimeout` and `await` to show how asynchronous operations do not block synchronous code.

3. **`02-async-function-return-behavior.js`**
   - Explains how `async` functions automatically wrap return values in Promises.
   - Covers different scenarios:
     - Explicitly returning values or Promises.
     - Throwing errors and how they propagate as rejected Promises.
     - Returning `undefined`.


4. **`04-async-await-with-promises.js`**
   - Demonstrates how `async/await` simplifies working with Promises.
   - Includes sequential execution of Promises using `await`.
   - Explains how `Promise.all` can be used for parallel execution.

5. **`05-async-await-sequential-vs-parallel.js`**
   - Compares sequential and parallel execution using `async/await` and `Promise.all`.
   - Shows how tasks can run in sequence or simultaneously.
   - Highlights the performance trade-offs between sequential and parallel execution.

6. **`06-async-await-error-handling.js`**
   - Focuses on error handling with `async/await`.
   - Uses `try...catch` to handle errors in asynchronous functions.
   - Shows how to handle Promise rejections and use `finally` for cleanup.

## Learning Goals


## How to Run
1. Navigate to the `async-await` folder in your terminal.
2. Use `node <filename>.js` to run any example. For example:
   ```bash
   node 01-basic-async-await.js
   ```
