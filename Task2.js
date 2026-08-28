// Task 2: Node.js Architecture

// V8 executes JavaScript code.
// libuv manages asynchronous operations such as timers.
// While the timer is waiting, Node.js can continue executing
// other synchronous code through the event loop.

console.log("Timer started");

setTimeout(() => {
    console.log("Timer finished");
}, 3000);

console.log("Node.js is still running");

// Expected Output:
// Timer started
// Node.js is still running
// Timer finished
