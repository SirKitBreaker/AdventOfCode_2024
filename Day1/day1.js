// Imports
const fs = require('fs');
const readline = require('readline');
// Read input file
const input = fs.createReadStream('input.txt', 'utf-8');

const rl = readline.createInterface({
    input: input,
    crlfDelay: Infinity
});

const arrLeft = [];
const arrRight = [];

rl.on('line', (line) => {
    const [value1, value2] = line.split(/\s+/);
    arrLeft.push(parseInt(value1, 10));
    arrRight.push(parseInt(value2, 10));
    return
});

async function partOne(arrLeft, arrRight) {
    sortedLeft = arrLeft.sort();
    sortedRight = arrRight.sort();
    let totalCount = 0;

    for (let i = 0; i < arrLeft.length; i++) {
        totalCount += Math.abs(arrLeft[i] - arrRight[i]);
    }

    console.log("Part One: Total count is ", totalCount)
}

async function partTwo(arrLeft, arrRight) {
    let totalCount = 0;
    arrLeft.forEach((item) => {
        const numOfOccurrences = arrRight.filter(x => x === item).length;
        totalCount += (item * numOfOccurrences);
    })

    console.log("Part Two: Total count is ", totalCount)
}

rl.on('close', async () => {
    await partOne(arrLeft, arrRight);
    await partTwo(arrLeft, arrRight);
})