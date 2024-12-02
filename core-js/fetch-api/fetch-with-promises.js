/**
 * Example: Fetching data using fetch and Promises (with .then())
 */

// Fetch data from an API
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// Handle the response and log the result
fetchPromise
    .then((response) => {
        // Convert the response body to JSON
        const jsonPromise = response.json();
        jsonPromise.then((data) => {
            console.log("Product Name:", data[0].name); // Log the name of the first product
        });
    })
    .catch((error) => {
        // Handle network errors or issues
        console.error("Error fetching data:", error);
    });
