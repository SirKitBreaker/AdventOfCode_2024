/* Solution by u/kochismo */
// Imports
const fs = require('node:fs');

// Read the entire file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Get lines from the file
    reports = data.split('\n').map(line => line.match(/\d+/g).map(Number));

    // Find all reports that are not safe
    function isSafe(report, tolerate) {
        // Iterating through the values of each report
        for (let i = 1; i < report.length; i++) {
            // Get difference between elements
            const diff = report[i] - report[i - 1];
            // Some match magic to make sure the differences are between 1 and 3
            if (Math.abs(diff) > 3 || (report[i - 1] - report[i - 2]) * diff <= 0) {
                // Return true or recursion for tolerance values(for part2)
                return !tolerate || [2, 1, 0].every(j => isSafe(report.toSpliced(i - j, 1), tolerate - 1));
            }
        }
    }

    /* TIL 
    !isSafe() is a function expression
    This is to call the function. Same as doing (isSafe() {})();
    This also makes it return a boolean result instead of undefined
    */
    part1 = reports.filter(report => !isSafe(report, 0)).length
    part2 = reports.filter(report => !isSafe(report, 1)).length
    console.log(part2);
});