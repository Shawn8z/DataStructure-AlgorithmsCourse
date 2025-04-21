// by Alexander Nikolskiy

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);

        console.log(lastDigitOfSumSquraresFibonacci(n));
        process.exit();
    }
}

function lastDigitOfSumSquraresFibonacci(n) {
    if (n <= 1) return n;

    const pisanoPeriod = 60;
    n = n % pisanoPeriod;

    let a = 0;
    let b = 1;
    let sumSquares = 0;

    for (let i = 0; i < n; i++) {
        sumSquares = (sumSquares + (a * a) % 10) % 10;

        if (i < n - 1) {
            let nextFib = (a + b) % 10
            a = b;
            b = nextFib;
        }
    }

    return sumSquares;
}

module.exports = lastDigitOfSumSquraresFibonacci;
