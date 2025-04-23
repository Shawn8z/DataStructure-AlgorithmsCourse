// by Alexander Nikolskiy


coins = [10, 5, 1];

function change(input) {
    const returnCoins = [];
    let newTotal = input;
    let coinType = 0;

    while(newTotal > 0) {
        const currentCoin = coins[coinType];
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
    console.log(returnCoins);
    return returnCoins.length;
}

const result = change(28);
console.log(result);



