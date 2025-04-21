// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    // write your code here
    let big, small;
    if (a > b) {
        big = a;
        small = b;
    } else {
        big = b;
        small = a;
    }

    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

module.exports = gcd;
