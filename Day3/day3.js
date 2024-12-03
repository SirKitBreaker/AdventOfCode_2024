const fs = require('node:fs');

// Read the entire file
const input = fs.readFileSync('input.txt').toString();
// The regex to use to find all muls
const regexp = /mul\(\d+,\d+\)/g;

// Part 1
// sumOfMuls(input);

// Part 2
const newInput = ("do()" + input).split("don't()").flatMap(element => element.split("do()").slice(1)).join();
sumOfMuls(newInput);

// Function to calculate the sum of muls
function sumOfMuls(input) {
    // Initialize final answer
    let answer = 0;

    input.match(regexp).forEach(mulElement => {
        (answer += mulElement.replace("mul(", "").replace(")", "").split(",").map(Number).reduce((a, b) => a * b));
    });

    // Print final answer
    console.log("Answer is: ", answer);
    return;
}