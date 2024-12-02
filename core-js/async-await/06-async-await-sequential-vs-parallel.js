/**
 * Example: Using async/await to handle multiple asynchronous operations.
 *
 * The `async` keyword allows you to write asynchronous code that looks synchronous.
 * - Use `await` to wait for a Promise to resolve.
 * - Async/await provides better readability compared to chaining `.then()` in Promises.
 * - It works well with `try...catch` for error handling.
 * - Sequential execution means tasks are executed one after the other, while parallel execution means tasks start simultaneously.

 */

// Simulate three asynchronous tasks with different completion times
const task1 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Result of Task 1");
        }, 2000); // Task 1 completes in 2 seconds
    });

const task2 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("Result of Task 2");
        }, 1000); // Task 2 completes in 1 second
    });

const task3 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("Result of Task 3");
        }, 1500); // Task 3 completes in 1.5 seconds
    });

/**
 * Sequential Execution Example
 * - Each task waits for the previous one to finish before starting.
 * - This is useful when tasks are dependent on each other or need to execute in a specific order.
 * - Uses `await` to pause execution until each Promise resolves.
 */

async function runSequentially() {
    console.log("Starting tasks sequentially...");

    // Wait for Task 1 to complete before proceeding
    const result1 = await task1();
    console.log(result1);

    
    // Wait for Task 2 to complete
    const result2 = await task2();
    console.log(result2);

    // Wait for Task 3 to complete
    const result3 = await task3();
    console.log(result3);

    console.log("All tasks completed sequentially!");
}


/**
 * Parallel Execution Example
 * - All tasks are started simultaneously and run in parallel.
 * - The `Promise.all` method waits for all Promises to resolve or for one to reject.
 * - This is useful when tasks are independent and can run at the same time.
 */

async function runInParallel() {
    console.log("\nStarting tasks in parallel...");

    const results = await Promise.all([task1(), task2(), task3()]);
    console.log("All tasks completed in parallel!");
    console.log("Results:", results);
}


runSequentially().then(() => runInParallel());

/**
 * Expected Output:
 *
 * 1. Sequential Execution:
 *    Starting tasks sequentially...
 *    Task 1 completed
 *    Result of Task 1
 *    Task 2 completed
 *    Result of Task 2
 *    Task 3 completed
 *    Result of Task 3
 *    All tasks completed sequentially!
 *
 * 2. Parallel Execution:
 *    Starting tasks in parallel...
 *    Task 2 completed
 *    Task 3 completed
 *    Task 1 completed
 *    All tasks completed in parallel!
 *    Results: [ 'Result of Task 1', 'Result of Task 2', 'Result of Task 3' ]
 *
 * Key Differences:
 * - In sequential execution, tasks run one after another, taking ~4.5 seconds total.
 * - In parallel execution, tasks run simultaneously, taking ~2 seconds total (equal to the longest task).
 */