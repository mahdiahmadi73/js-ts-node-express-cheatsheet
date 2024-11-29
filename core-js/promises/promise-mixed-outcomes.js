/**
 * This example demonstrates handling a mix of resolved and rejected promises using Promise.allSettled.
 */
const p1 = Promise.resolve("Promise 1 resolved");
const p2 = Promise.reject("Promise 2 rejected");
const p3 = Promise.resolve("Promise 3 resolved");

Promise.allSettled([p1,p2,p3])
    .then(((results)=>{
        results.forEach((result,index)=>{
            console.log(`Promise ${index + 1}:`, result);
        })
    }))

    