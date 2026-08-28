// Task 13: Event Loop and Job Queue

// Predicted output:
// 1. Start
// 2. End
// 3. Promise
// 4. Timeout

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Expected Output:
// Start
// End
// Promise
// Timeout

// The predicted output order is correct.
