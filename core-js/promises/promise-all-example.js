/**
 * Example: Using Promise.all to handle multiple asynchronous operations.
 *
 * Promise.all takes an array of Promises and runs them in parallel.
 * - It waits for all Promises to resolve before running the `.then` block.
 * - If any Promise rejects, the `.catch` block is triggered immediately.
 * - Use this when all tasks are required to succeed.
 */

const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 completed");
    }, 2000);
});

const task2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 2 completed");
    }, 1000);
});

const task3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 3 completed");
    }, 1500);
});

// Use Promise.all to wait for all tasks to complete
Promise.all([task1, task2, task3])
    .then((results) => {
        console.log("All tasks completed:");
        console.log(results); // Output: [ 'Task 1 completed', 'Task 2 completed', 'Task 3 completed' ]
    })
    .catch((error) => {
        console.error("One of the tasks failed:", error);
    });
