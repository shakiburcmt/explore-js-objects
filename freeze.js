const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const values = Object.values(bottle);
console.log(values);
// keys valuse eksatheo dekha jay er jonno entires use hou
const pair = Object.entries(bottle);
console.log(pair)
// evabe korle array er moddhe array hobe ar etake bole 2 dimentional array


// delete diye property delete hoy
delete bottle.isCleaned;
console.log(bottle)

// seal korle delete kaj korena, tobe modify kora jay, tobe new property add kora jabe na
Object.seal(bottle);
delete bottle.price;
bottle.price = 100;
// new property
bottle.height = 10;
console.log(bottle)

// freeze korle kichui kora jabe
Object.freeze(bottle);
delete bottle.price;
bottle.price = 1000;
// new property
bottle.height = 10;
console.log(bottle)