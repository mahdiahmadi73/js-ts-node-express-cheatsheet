/**
 * Example: Callback with Data and Methods
 * 
 * This script demonstrates how to use a callback function
 * to process user data and pass structured information,
 * including methods, back to the caller.
 * 
 * Key Concepts:
 * - Passing multiple arguments (data and methods) to a callback.
 * - Creating an object with both data and utility methods.
 * - Invoking a callback to handle asynchronous or modular behavior.
 * 
 * Use Case:
 * This pattern can be used to process various types of data
 * (e.g., user profiles, API responses) and pass results for further processing.
 */
function processUser(user, callback){
    const welcomeMessage= `Welcome, ${user.name}`
    const userInfo={
        fullName :`${user.firstName} ${user.lastName}`,
        email: user.email,
        greet: () => console.log(`Hello, ${user.firstName}!`)
    }
    callback(welcomeMessage, userInfo);

}
const user={
    firstName: "John",
    lastName: "Wick",
    email: "JohnWickNeverDies@gmail.com"
}

processUser(user, (message,userInfo)=>{
    console.log(message);
    console.log(`Full Name: ${userInfo.fullName}`);
    console.log(`Email: ${userInfo.email}`);
    userInfo.greet();
})