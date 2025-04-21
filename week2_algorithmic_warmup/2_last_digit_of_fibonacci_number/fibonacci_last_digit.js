// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    if (n <= 1) return n;

    const pisanoPeriod = 60;
    n = n % pisanoPeriod;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let fib1 = 0, fib2 = 0;
        fib1 = b;
        fib2 = (a + b) % 10

        a = fib1;
        b = fib2;
    }

    return b;
}

module.exports = fib;
