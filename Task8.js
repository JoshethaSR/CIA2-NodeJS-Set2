// Task 8: Callback-Based Asynchronous Function

function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        if (seconds < 0) {
            callback("Invalid duration", null);
        } else {
            callback(null, seconds);
        }
    }, 1000);
}

checkTimeLeftCallback(5, (error, result) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Time left:", result, "seconds");
    }
});

// Expected Output:
// Time left: 5 seconds
