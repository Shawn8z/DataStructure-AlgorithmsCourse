// by Alexander Nikolskiy


boxOfCoint = [10, 5, 1];

function change(input, coins) {
    changes = [...coins.sort((a, b) => b - a)]
    console.log(changes)
    const returnCoins = [];
    let newTotal = input;
    let coinType = 0;


    while(newTotal > 0) {
        const currentCoin = changes[coinType];
        const changeCoin = newTotal - currentCoin < 0

        if (newTotal === 0) {
            break;
        }
        if (changeCoin) {
            coinType += 1;
            continue
        } else {
            if (coinType === 3) {
                continue;
            }
            returnCoins.push(currentCoin);
            newTotal = newTotal - currentCoin;
        }
    }
    // console.log(returnCoins, boxOfCoint);
    return returnCoins.length;
}

// console.log(change(28, boxOfCoint));
console.log(change(8, [1, 4, 6]));

// [2,3,9,2,2]
// [2, 21]
// Largest Concatenate
const input2 = [2, 21];
function largetsConcatenate(input) {
    const resultArr = [];
    const numArr = [...input];
    const targetLength = input.length;
    
    while(resultArr.length !== targetLength) {
        let currentMax = 0;
        for (let i = 0; i < targetLength; i += 1) {

            if (numArr[i] < 0) continue;
            if (currentMax < numArr[i]) currentMax = numArr[i];      
        }
        const maxIndex = numArr.findIndex((item) => item === currentMax);
        console.log(currentMax, '<<<  currentMax')
        resultArr.push(currentMax); 
        numArr[maxIndex] = -999;
    }
    console.log(resultArr);
    return resultArr.join('');
}

// console.log(largetsConcatenate(input2))


