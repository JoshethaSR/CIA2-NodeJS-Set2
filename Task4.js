// Task 4: Date Difference

// Tested in the Node REPL:
// let start = new Date();
// let end = new Date(start.getTime() + 90000);
// (end - start) / 1000
// Output: 90

const start = new Date();
const end = new Date(start.getTime() + 90000);

const secondsRemaining = (end - start) / 1000;

console.log("Seconds remaining:", secondsRemaining);

// Expected Output:
// Seconds remaining: 90
