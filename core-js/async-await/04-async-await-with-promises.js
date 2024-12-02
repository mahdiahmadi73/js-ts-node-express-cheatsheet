/**
 * Example: Async/Await with Promises
 *
 * This example demonstrates how `async/await` simplifies working with Promises.
 * It shows how you can handle multiple asynchronous operations in a clean,
 * top-to-bottom flow using `async/await` instead of `.then()` chains.
 *
 * Key Concepts:
 * - Using `await` to pause execution until a Promise resolves.
 * - Handling multiple Promises sequentially and combining their results.
 * - Simplifying code that would otherwise require `.then()` chaining.
 *
 * Expected Output:
 * Task 1 started
 * Task 1 complete
 * Task 2 started
 * Task 2 complete
 * All tasks done: Task 1 + Task 2
 */

// Simulate an asynchronous task returning a Promise
function doTask1() {
    console.log("Task 1 started");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve("Task 1");
        }, 2000); // Simulates a 2-second task
    });
}

// Simulate another asynchronous task returning a Promise
function doTask2() {
    console.log("Task 2 started");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 complete");
            resolve("Task 2");
        }, 1000); // Simulates a 1-second task
    });
}

// Using async/await to handle the Promises sequentially
async function main() {
    const result1 = await doTask1(); // Wait for Task 1 to complete
    const result2 = await doTask2(); // Wait for Task 2 to complete
    console.log(`All tasks done: ${result1} + ${result2}`); // Combine results
}

main(); // Call the async function
