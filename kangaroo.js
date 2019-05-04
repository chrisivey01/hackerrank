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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let kangaroo1 = x1;
    let kangaroo2 = x2;

    for(let i = 0; i<10000; i++){
        kangaroo1 += v1;
        kangaroo2 += v2;

        if(kangaroo1 === kangaroo2){
            return "YES"
        }
    }
    return "NO"

    // let kangaroo1 = x1 + v1;
    // let kangaroo2 = x2 + v2;
    //
    // if(kangaroo1 % kangaroo2 === 0 || kangaroo2 % kangaroo1 === 0 ){
    //     return "YES"
    // }else{
    //     return "NO"
    // }
    // let jumps = 0;
    // while((kangaroo1 !== kangaroo2) || (kangaroo1 >= 10000 || kangaroo2 >= 10000) ){
    //     kangaroo1 += x1 + v1;
    //     kangaroo2 += x2 + v2;
    //     jumps++
    // }
    //
    // console.log(kangaroo1 + " " + kangaroo2);
    // console.log(jumps);
    //
    // if(kangaroo1 === kangaroo2){
    //     return "YES"
    // }else{
    //     return "NO"
    // }


}

function main() {
    const ws = fs.createWriteStream(process.env.TERM);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
