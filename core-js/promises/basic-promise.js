// Example: Basic Promise

const { resolve } = require("path");

/**
 * A Promise represents a value that may be available now, later, or never.
 * This example demonstrates how to create and resolve/reject a Promise.
 */

const myPromise = new Promise((resolve,reject)=>{
    const success = true; // Simulate success or failure
    if (success){
        resolve("The promise was resolved successfully!");
        }
    else{
            reject("The promise was rejected!");
        }
})

// Consume the Promise
myPromise
    .then((result) => {
        console.log(result); // Logs: "The promise was resolved successfully!"
    })
    .catch((error) => {
        console.error(error); // Logs: "The promise was rejected!" if success = false
    });