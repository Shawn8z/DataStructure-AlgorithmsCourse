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

   let fib1 = 0, fib2 = 1;
   for (let i = 2; i <= n; i++) {
      const temp = fib1 + fib2;
      fib1 = fib2;
      fib2 = temp;
   }
   return fib2;
}

module.exports = fib;
