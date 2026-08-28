// Task 11: Async-Await with Try/Catch

function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seconds < 0) {
                reject("Invalid duration");
            } else {
                resolve(seconds);
            }
        }, 1000);
    });
}

async function runCountdownAsync(seconds) {
    try {
        const result = await checkTimeLeftPromise(seconds);
        console.log("Time left:", result, "seconds");
    } catch (error) {
        console.log("Error:", error);
    }
}

runCountdownAsync(-2);

// Expected Output:
// Error: Invalid duration
