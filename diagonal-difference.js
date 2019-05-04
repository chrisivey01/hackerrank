//https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=profile
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let firstValue = 0;
    let secondValue = 0;

    for(let i = 0; i< arr.length; i++){
        firstValue += arr[i][i]
    }

    let iterator = arr.length;
    for(let i = 0; i<arr.length; i++){
        secondValue += arr[i][iterator -= 1]
    }
    let total = firstValue - secondValue;
    console.log(Math.abs(total))
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
