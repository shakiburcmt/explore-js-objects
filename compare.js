const first1 = 2;
const second2 = 2;
if (first1 === second2) {
    console.log('they are same');
}



const first = { a: 2 };
const second = { a: 2 };
if (first === second) {
    console.log('they are same');
}
// duita object same holeo tader refference alada tai different dekhabe
else {
    console.log('different')
}

const firsst = { a: 2 };
const secondd = firsst;
if (firsst === secondd) {
    // ekhane duitar refference same jehetu firsst er moddhei secondd rakha hoyeche tai same dekhabe
    console.log('they are same');
}
else {
    console.log('different')
}


// shoud not use this methid to compare object or array, order ultapalta kora jabe na object er moddhe ekadhik property thakle
const fst = { a: 5 };
const scnd = { a: 5 };
const fstString = JSON.stringify(fst);
const scndString = JSON.stringify(scnd);
if (fstString === scndString) {
    console.log('same');
}

// tobe order ultapalta korle property check kore   compare kora jay tbe ekhane , tobe jodi property name change kore dewa hoy taholeo true dekhabe jehetu tader length same
const fstt = { a: 5, d: 3 };
const scndd = { b: 3, a: 5 };

function compareObject(fstt, scndd) {
    const fstStringg = Object.keys(fstt);
    const scndStringg = Object.keys(scndd);
    if (fstStringg.length === scndStringg.length) {
        for (const key of fstStringg) {
            if (fstt[key] !== scndd[key]) {
                return false;
            }
        }
        return true;
    }
}
console.log(compareObject(fstt, scndd));