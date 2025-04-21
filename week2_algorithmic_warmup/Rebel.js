
function count(n, k) {
    let rebelArr = [];
    for (let i = 0; i <= n; i++) {
        rebelArr.push(i);
    }

    console.log(rebelArr);
    let headCount = 0;

    while(rebelArr.length !== 1) {
        let tempArr = [];
        for (let i = 0; i <= rebelArr.length; i++) {
            if (rebelArr[i] === undefined) break;
            headCount += 1;
            console.log('hit')
            if (headCount === k) {
                headCount = 0;
                continue;
            }
            tempArr.push(rebelArr[i]);
        }
        rebelArr = tempArr;
    }    
    
    console.log(rebelArr);
}

count(12, 3);