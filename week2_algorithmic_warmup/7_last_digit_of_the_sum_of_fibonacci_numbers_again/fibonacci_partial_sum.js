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
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getPartialSum(n, m));
        process.exit();
    }
}

function matrixMultiplyMod10(a, b) {
    return [
        [ (a[0][0] * b[0][0] + a[0][1] * b[1][0]) % 10n, (a[0][0] * b[0][1] + a[0][1] * b[1][1]) % 10n ],
        [ (a[1][0] * b[0][0] + a[1][1] * b[1][0]) % 10n, (a[1][0] * b[0][1] + a[1][1] * b[1][1]) % 10n ]
    ];
}

function getFibMod10(n) {
    if (n <= 1) return n % 10;
    let matrix = [
        [1n, 1n],
        [1n, 0n]
    ];
    let result = [
        [1n, 0n],
        [0n, 1n]
    ];

    n = BigInt(n) - 1n;

    while (n > 0n) {
        if (n % 2n === 1n) {
            result = matrixMultiplyMod10(result, matrix);
        };
        matrix = matrixMultiplyMod10(matrix, matrix);
        n = n / 2n;
    }
    return result[0][0];
}

function getPartialSum(n, m) {
    n = BigInt(n);
    m = BigInt(m);
    if (n > m) return 0;
    
    const fib1 = getFibMod10(n + 1n);
    const fib2 = getFibMod10(m + 2n);

    const result = (Number(fib2 - fib1) + 10) % 10;
    return result;
}

module.exports = getPartialSum;
