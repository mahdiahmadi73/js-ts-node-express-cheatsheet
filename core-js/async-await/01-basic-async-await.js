/**
 * Example: Basic Usage of Async/Await
 *
 * This example demonstrates how to use the `async` and `await` keywords
 * to handle asynchronous operations in a clean and readable way.
 *
 * Key Concepts:
 * - `async` makes a function return a Promise.
 * - `await` pauses the execution of an `async` function until the Promise resolves.
 *
 * Expected Output:
 * Start of script
 * Fetching data...
 * End of script
 * Data fetched: { id: 1, title: "Learn async/await" }
 * NOTE: The main() function is asynchronous, meaning it doesn’t block the rest of the code.
 JavaScript continues executing the rest of the script while the async operation is in progress.
 * 
 */

// Simulate an asynchronous task ( fetching data from an API)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, title: "Learn async/await" }); // Resolves after 2 seconds
        }, 3000);
    });
}

// Using async/await to handle the Promise
async function main() {
    console.log("Fetching data...");
    const data = await fetchData(); // Waits for fetchData to resolve
    console.log("Data fetched:", data); // Logs the resolved value
}

console.log("Start of script"); // Executes immediately
main(); // Call the async function
console.log("End of script"); // Executes immediately after main() is called