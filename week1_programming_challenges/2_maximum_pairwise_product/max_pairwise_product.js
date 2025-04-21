// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);
    console.log(max(arr));
    process.exit();
}

function max2(arr) {
    // write your code here
    const maxA = Math.max(...arr);
    const maxAIndex = arr.indexOf(maxA);
    const arr2 = [...arr];
    arr2[maxAIndex] = arr2[arr.length - 1];
    arr2.pop();
    const maxB = Math.max(...arr2);
    console.log(`max: ${maxA}, ${maxB}`);
    return maxA * maxB;
}

function max3(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    console.log(sortedArr)
    // console.log(`max3 ${arr[0]}, ${arr[1]}`)
    return arr[0] * arr[1];
}

const betterMax = (arr) => {
    const first = Math.max(...arr);
    const firstIndex = arr.indexOf(first);
    const firstOutArr = [
      ...arr.slice(0, firstIndex),
      ...arr.slice(firstIndex + 1),
    ];
    console.log(firstOutArr)
    const second = Math.max(...firstOutArr);
    return first * second;
  };

function max(arr) {
    let max1, max2;
    let max1Index;
    max1 = max2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
            max1Index = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i !== max1Index && arr[i] > max2) {
            max2 = arr[i];
        }
    }
    // console.log(`max2: ${max1}, ${max2}`);
    return max1 * max2;
}

function stressTest() {

    while(true) {
        const arrayLength = 5;
        const numberSize = 19000;

        const testArr = [];
        console.log(testArr);

        for (let i = 0; i < arrayLength; i++) {
            testArr.push(Math.floor((Math.random() * numberSize)));
        }
        
        // isSame = max(testArr) === max2(testArr);
        isSame = max(testArr) === max3(testArr);

        if (isSame === false) {
            // console.log(max(testArr));
            // console.log(max3(testArr));
            break
        };
    }
}

stressTest();



module.exports = max;
