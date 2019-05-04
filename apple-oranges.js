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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let firstNumber = s;
    let secondNumber = t;
    let apple = a;
    let orange = b;

    let resultsApples = [];
    let resultsOranges = [];
    for(let a of apples){
        if(a > 0) {
            resultsApples.push(apple + a)
        }else{
            resultsApples.push(apple - Math.abs(a))
        }
    }

    for(let b of oranges){
        if(b > 0) {
            resultsOranges.push(orange + b)
        }else{
            resultsOranges.push(orange - Math.abs(b))
        }
    }

    let countApples = 0;
    for(let result of resultsApples){
        if(result >= firstNumber && result <= secondNumber ){
            countApples ++
        }
    }


    let countOranges = 0;
    for(let result of resultsOranges){
        if(result >= firstNumber && result <= secondNumber ){
            countOranges++
        }
    }

    process.stdout.write(countApples + "\n" + countOranges);
    return countApples + " " + countOranges
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
