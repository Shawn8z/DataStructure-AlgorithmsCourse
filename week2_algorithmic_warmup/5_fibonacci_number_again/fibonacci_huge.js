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

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function matrixMultiplyMod(a, b, mod) {
    return [
        [
            ((a[0][0] * b[0][0] + a[0][1] * b[1][0]) % mod),
            ((a[0][0] * b[0][1] + a[0][1] * b[1][1]) % mod)
        ],
        [
            ((a[1][0] * b[0][0] + a[1][1] * b[1][0]) % mod),
            ((a[1][0] * b[0][1] + a[1][1] * b[1][1]) % mod)
        ]
    ];
}

function getFibMod(n, m) {
    if (n <= 1) return n % m;
    let matrix = [[1n, 1n], [1n, 0n]];
    let result = [[1n, 0n], [0n, 1n]];

    n = BigInt(n) - 1n;
    mod = BigInt(m);

    while (n > 0n) {
        if (n % 2n === 1n) {
            result = matrixMultiplyMod(result, matrix, mod);
        }
        matrix = matrixMultiplyMod(matrix, matrix, mod);
        n = n / 2n;
    }
    return Number(result[0][0]);
}

module.exports = getFibMod;
