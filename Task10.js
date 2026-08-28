// Task 10: Promise-Based Time Check

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

checkTimeLeftPromise(5)
    .then((result) => {
        console.log("Time left:", result, "seconds");
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Expected Output:
// Time left: 5 seconds
