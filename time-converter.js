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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let obtainAmOrPm = s.slice(8);
    let obtainHours = s.slice(0,2);
    let obtainTime = s.slice(2,8);

    if(obtainAmOrPm === "PM"){
        if(parseInt(obtainHours) !== 12) {
            obtainHours = parseInt(obtainHours) + 12
        }
    }else{
        if(obtainHours === "12"){
            obtainHours = "00"
        }
    }
    let results = obtainHours + obtainTime;

    console.log(results);

    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
