// https://www.hackerrank.com/challenges/drawing-book/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    const pageNumbers = Math.floor(p /2);
    const totalTurns = Math.floor(n/2);

    let results = Math.min(pageNumbers, totalTurns - pageNumbers);

    console.log(results);
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
