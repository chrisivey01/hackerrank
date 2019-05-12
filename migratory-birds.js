// https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

    let obj = {};
    for(let i = 0; i<arr.length; i++){
        if(obj[arr[i]] > 0){
            obj[arr[i]] ++;
        } else{
            obj[arr[i]] = 1;
        }
    }

    let sortable = [];
    for (let key in obj) {
        sortable.push([key, obj[key]]);
    }

    sortable.sort(function(a, b) {
        return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
    });
    let results = sortable[0][0];

    console.log(parseInt(results));

    return parseInt(results);

}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
