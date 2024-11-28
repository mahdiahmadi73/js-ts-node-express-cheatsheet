// This example demonstrates "callback hell" in JavaScript.
// Callback hell occurs when you have deeply nested callbacks to handle asynchronous operations.
// While it works, this approach makes the code hard to read and maintain.
// We’ll simulate a sequence of tasks: "Preparing Breakfast", "Brewing Coffee", and "Setting the Table."

// Simulates preparing breakfast with a delay, then calls the next task via a callback
function prepareBreakfast(callback) {
    setTimeout(() => {
        console.log("Preparing Breakfast...");
        callback(); // Calls the next task after this one is done
    }, 2000);
}

// Simulates brewing coffee with a delay, then calls the next task via a callback
function brewCoffee(callback) {
    setTimeout(() => {
        console.log("Brewing Coffee...");
        callback(); // Calls the next task after this one is done
    }, 1000);
}

// Simulates setting the table with a delay, then logs a final message
function setTable(callback) {
    setTimeout(() => {
        console.log("Setting the Table...");
        callback(); // Final task in the sequence
    }, 500);
}

// Starts the chain of tasks in the correct order
function morningRoutine() {
    prepareBreakfast(() => {
        brewCoffee(() => {
            setTable(() => {
                console.log("Morning routine complete. Enjoy your meal!");
            });
        });
    });
}

// Start the routine
morningRoutine();

/**
 * Output:
 * Preparing Breakfast...
 * Brewing Coffee...
 * Setting the Table...
 * Morning routine complete. Enjoy your meal!
 *
 * Explanation:
 * Each function starts only after the previous function finishes,
 * leading to deeply nested callbacks. This is why it is called "callback hell."
 */