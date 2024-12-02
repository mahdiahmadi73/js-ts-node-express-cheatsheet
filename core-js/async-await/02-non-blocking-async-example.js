/**
 * This example demonstrates JavaScript's non-blocking, asynchronous nature:
 * 
 * - Non-blocking: Long-running tasks like `setTimeout` do not block the execution
 *   of subsequent code. The program continues to run while the task is handled
 *   in the background.
 * 
 * - Asynchronous: The `setTimeout` schedules a callback to run after 2 seconds,
 *   and JavaScript moves on without waiting.
 * 
 * - Event Loop: Once all synchronous code finishes, the event loop picks up
 *   the callback and executes it.
 */


// Simulate fetching data with a delay
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // Invoke the callback after data is fetched
    }, 2000);
}

console.log("Start");
fetchData(() => {
    console.log("Now processing the fetched data...");
});


/**
* Expected Output:
* Start
* End
* Data fetched!
*/
