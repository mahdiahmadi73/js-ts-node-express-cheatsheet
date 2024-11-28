// Example: Demonstrating sequential tasks using callbacks

/**
 * A "callback" is a function passed as an argument to another function.
 * It is called (or "called back") after the main function completes its task.
 * Callbacks are commonly used to handle asynchronous operations in JavaScript,
 * like fetching data, reading files, or executing code after a delay.
 */

function boilWater(callback) {
    setTimeout(() => {
        console.log("Boiling Water...");
        callback(); // Proceed to the next task
    }, 1000);
}

function makeTea(callback) {
    setTimeout(() => {
        console.log("Making Tea...");
        callback(); // Proceed to the next task
    }, 1000);
}

function serveTea() {
    console.log("Serving Tea! Enjoy!");
}

// Start the sequence of tasks
boilWater(() => {
    makeTea(() => {
        serveTea();
    });
});
