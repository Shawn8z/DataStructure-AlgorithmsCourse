function maxNum () {
    let numArr = [9, 1, 6, 8, 9];
    let outPut = [];

    let tempArr = [...numArr];
    let pickedIndex = 0;
    while (outPut.length !== numArr.length) {
        let max = 0;
        for (let i = 0; i < numArr.length; i++) {
            if (tempArr[i] === NaN) continue;
            
            if (tempArr[i] > max) {
                max = tempArr[i];
                pickedIndex = i;
            }
        }
        outPut.push(max);
        tempArr[pickedIndex] = NaN;
    }
    
    console.log(outPut.join(''));
}

maxNum();