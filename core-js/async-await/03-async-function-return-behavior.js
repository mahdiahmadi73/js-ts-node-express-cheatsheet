/**
 * Example: Async Function Return Behavior
 *
 * This example demonstrates how `async` functions automatically wrap return
 * values in a Promise, regardless of whether you explicitly return a Promise.
 *
 * Key Behaviors:
 * 1. Returning a value in an `async` function is equivalent to `Promise.resolve(value)`.
 * 2. If nothing is returned, it resolves to `undefined`.
 * 3. If an error is thrown inside the `async` function, it is equivalent to `Promise.reject(error)`.
 * 4. If a Promise is returned explicitly, it is used as-is without additional wrapping.
 */

// 1. Returning a plain value
async function returnPlainValue() {
    return "Hello, World!"; // This gets automatically wrapped in Promise.resolve()
}

returnPlainValue().then((value) => console.log("Resolved value:", value));
// Output: Resolved value: Hello, World!

// 2. Returning nothing (resolves to undefined)
async function returnNothing() {
    // No return statement
}

returnNothing().then((value) => console.log("Resolved value:", value));
// Output: Resolved value: undefined

// 3. Throwing an error (equivalent to Promise.reject())
async function throwError() {
    throw new Error("Something went wrong!"); // Automatically wrapped in Promise.reject()
}

throwError()
    .catch((error) => console.log("Rejected reason:", error.message));
// Output: Rejected reason: Something went wrong!

// 4. Returning an explicit Promise
async function returnExplicitPromise() {
    return Promise.resolve("Explicit Promise");
}

returnExplicitPromise().then((value) => console.log("Resolved value:", value));
// Output: Resolved value: Explicit Promise

// 5. Combining synchronous and asynchronous behavior
async function combinedBehavior() {
    console.log("Before return");
    return "Sync-like behavior"; // Wrapped as a Promise
}

combinedBehavior().then((value) => console.log("Resolved value:", value));
// Output:
// Before return
// Resolved value: Sync-like behavior
