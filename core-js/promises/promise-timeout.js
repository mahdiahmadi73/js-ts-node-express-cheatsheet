/**
 * Example: Using Promises to implement a custom timeout function.
 */

const timeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Timeout after ${ms}ms`);
        }, ms);
    });
};

timeout(2000).then((message) => console.log(message)); // Logs: "Timeout after 2000ms"
