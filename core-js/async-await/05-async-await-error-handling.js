/**
 * Example: Error Handling with Async/Await
 *
 * This example demonstrates how to handle errors in `async/await` workflows using
 * `try...catch` blocks. It also shows how rejections from Promises can propagate
 * and how to handle them effectively.
 *
 * Key Concepts:
 * - Wrapping `await` calls in a `try...catch` block to handle errors.
 * - Propagating errors using `throw`.
 * - Handling errors globally with `.catch()` on the returned Promise.
 *
 * Expected Output:
 * Task 1 started
 * Task 1 complete
 * Task 2 started
 * Error caught: Something went wrong in Task 2
 * Final message: Main function finished
 */

// Simulate a task that succeeds
function doTask1() {
    console.log("Task 1 started");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve("Task 1 result");
        }, 1000); // Resolves after 1 second
    });
}

// Simulate a task that fails
function doTask2() {
    console.log("Task 2 started");
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong in Task 2"));
        }, 1500); // Rejects after 1.5 seconds
    });
}

// Using async/await with error handling
async function main() {
    try {
        const result1 = await doTask1(); // Task 1 completes successfully
        console.log("Task 1 result:", result1);

        const result2 = await doTask2(); // Task 2 throws an error
        console.log("Task 2 result:", result2); // This won't run
    } catch (error) {
        console.log("Error caught:", error.message); // Catch and log the error
    } finally {
        console.log("Final message: Main function finished"); // Runs regardless of success or failure
    }
}

main(); // Call the async function
