// https://www.hackerrank.com/challenges/bon-appetit/problem
'use strict';

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

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {

    let soloCharge = 0;
    let duoCharge = 0;
    for(let i = 0; i < bill.length; i++) {
        if (i === k) {
            soloCharge = bill[k];
        } else {
            duoCharge += bill[i]
        }
    }

    let results = duoCharge / 2;
    if(b - results <= b && (b - results !== 0)){
        console.log(b - results)
    }else{
        console.log("Bon Appetit")
    }
}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
