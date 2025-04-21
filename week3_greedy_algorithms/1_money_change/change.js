// by Alexander Nikolskiy


coins = [10, 5, 1];

function change(input) {
    const returnCoins = [];
    let newTotal = input;
    let coinType = 0;
    console.log(newTotal)

    const currentCoint = coins[coinType];
    const needMoreChange = newTotal - currentCoint > 0
    while(newTotal !== 0) {
    // while(false) {
        const currentCoint = coins[coinType];
        const needMoreChange = newTotal - currentCoint > 0
        // console.log(currentCoint)
        console.log(newTotal)

        if (newTotal === 0) {
            break;
        }

        if (needMoreChange) {
            returnCoins.push(currentCoint);
            newTotal =- currentCoint;
        } else {
            if (coinType === 2) {
                continue;
            }

            coinType += 1;
            continue;   
        }
    }

    console.log(returnCoins, '<<< coins');
    return returnCoins.length;
}

change(28);



