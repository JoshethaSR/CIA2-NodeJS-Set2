// Task 9: Countdown using Node Timers

let seconds = 5;

const interval = setInterval(() => {
    console.log("Remaining:", seconds);

    if (seconds === 0) {
        clearInterval(interval);
        return;
    }

    seconds--;
}, 1000);

// Separate timeout for the final notification
setTimeout(() => {
    console.log("Time's up!");
}, 6000);

// Expected Output:
// Remaining: 5
// Remaining: 4
// Remaining: 3
// Remaining: 2
// Remaining: 1
// Remaining: 0
// Time's up!
