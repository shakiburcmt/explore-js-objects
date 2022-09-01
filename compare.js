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
    console.log('they are same');
}
else {
    console.log('different')
}