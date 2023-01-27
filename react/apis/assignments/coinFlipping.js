function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount === 5) {
            resolve(`Heads has been flipped 5 consecutive times in ${attempts} tries`);
        } else {
            reject(`Did not get 5 heads in a row in 100 tries`);
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
    
console.log( "When does this run now?" );