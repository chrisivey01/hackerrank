//https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=profile
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = Math.max(...arr);
    let max = Math.min(...arr);

    let minTotal = 0;
    let maxTotal = 0;
    if(arr.every(check => check === arr[0])){
        for(let i = 0; i<arr.length - 1; i++){
            minTotal += arr[i];
            maxTotal += arr[i];
        }
        return process.stdout.write(`${minTotal}  ${maxTotal}`);
    }

    for(let maxCheck of arr){
        if(maxCheck !== max){
            maxTotal += maxCheck
        }
    }

    for(let minCheck of arr){
        if(minCheck !== min){
            minTotal += minCheck
        }
    }
    process.stdout.write(`${minTotal}  ${maxTotal}`);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
