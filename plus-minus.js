//https://www.hackerrank.com/challenges/plus-minus/problem?h_r=profile
'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for(let item of arr){
        if(item > 0){
            positive += 1
        }else if(item < 0){
            negative -= 1
        }else{
            zeros += 1
        }
    }
    let positiveAnswer = Math.abs(positive/arr.length);
    let negativeAnswer = Math.abs(negative/arr.length);
    let zeroAnswer = Math.abs(zeros/arr.length);

    process.stdout.write(positiveAnswer.toFixed(6) + '\n');
    process.stdout.write(negativeAnswer.toFixed(6) + '\n');
    process.stdout.write(zeroAnswer.toFixed(6) + '\n');
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
