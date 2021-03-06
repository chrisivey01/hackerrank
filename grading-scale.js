//https://www.hackerrank.com/challenges/grading/problem?h_r=profile
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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    let results = [];

    grades.forEach(grade => {
        let roundedAnswer = Math.ceil(grade / 5) * 5;
        if (grade < 37) {
            return results.push(grade);
        }
        if (roundedAnswer - grade < 3) {
            return results.push(roundedAnswer);
        } else {
            return results.push(grade);
        }
    });

    console.log(results);

    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
