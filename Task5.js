// Task 5: Command-Line Duration and Cancel Input

const duration = parseInt(process.argv[2]);

if (isNaN(duration) || duration <= 0) {
    console.log("Please provide a valid duration in seconds.");
    process.exit();
}

let seconds = duration;

console.log("Countdown started for", duration, "seconds.");
console.log('Type "cancel" and press Enter to stop the countdown.');

const timer = setInterval(() => {
    console.log("Remaining:", seconds);

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Countdown completed.");
        process.stdin.pause();
        return;
    }

    seconds--;
}, 1000);

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        process.stdin.pause();
    }
});

// Example command:
// node Task5.js 10

// Example output when cancelled:
// Countdown started for 10 seconds.
// Type "cancel" and press Enter to stop the countdown.
// Remaining: 10
// Remaining: 9
// Countdown cancelled.
