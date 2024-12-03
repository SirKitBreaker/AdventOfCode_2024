// Imports
const fs = require('fs');
const readline = require('readline');
// Read input file
const input = fs.createReadStream('input.txt', 'utf-8');

const rl = readline.createInterface({
    input: input,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    
    return
});

async function partOne() {}

async function partOne() {}

rl.on('close', async () => {
    await partOne();
    await partTwo();
})