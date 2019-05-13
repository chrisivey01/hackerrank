// https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=next-challenge&h_v=zen

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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    const colors = {};
    let matches = 0;
    for (let i = 0; i < n; i++) {
        if (colors[ar[i]]) {
            matches++;
            colors[ar[i]] = 0;
        } else {
            colors[ar[i]] = 1;
        }
    }
    return matches;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
