// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
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

// Complete the breakingRecords function below.
function breakingRecords(scores) {

    let lowestScore = 0;
    let highestScore = 0;
    let highestCount = 0;
    let lowestCount = 0;

    for(let i = 0; i<scores.length; i++){
        if(i === 0) {
            if (highestScore === 0) {
                highestScore = scores[i];
                lowestScore = scores[i];
            }
        }

        if(highestScore < scores[i]){
            highestCount ++;
            highestScore = scores[i];
        }

        if(lowestScore > scores[i]){
            lowestCount ++;
            lowestScore = scores[i];
        }
    }

    let results = [highestCount, lowestCount];
    console.log(highestCount + " " + lowestCount);

    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
