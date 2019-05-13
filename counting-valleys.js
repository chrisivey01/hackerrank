// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=next-challenge&h_v=zen

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

// Complete the countingValleys function below.
function countingValleys(n, s) {

    const lengthOfArray = n;
    const stringOfValleys = s;

    let level = 0;
    let valleys = 0;

    for(let i = 0; i< lengthOfArray; i++){
        if(stringOfValleys[i] === "U"){
            level++;
            if(level === 0){
                valleys++
            }
        }else{
            level--
        }
    }
    console.log(valleys);
    return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
