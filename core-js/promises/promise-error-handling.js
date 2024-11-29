// Example: Handling errors with Promises
const promiseWithError = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Random success or failure
    if (success) resolve("Task succeeded!");
    else reject("Task failed!");
});

promiseWithError
    .then((message) => console.log("Success:", message))
    .catch((error) => console.error("Error:", error))
    .finally(() => console.log("Promise completed."));
