// Task 3: Basic Countdown using Node Timers

// Node.js timers methods used:
// setInterval()
// clearInterval()

let seconds = 5;

const timer = setInterval(() => {
    console.log("Seconds remaining:", seconds);

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Countdown finished");
        return;
    }

    seconds--;
}, 1000);

// Expected Output:
// Seconds remaining: 5
// Seconds remaining: 4
// Seconds remaining: 3
// Seconds remaining: 2
// Seconds remaining: 1
// Seconds remaining: 0
// Countdown finished
