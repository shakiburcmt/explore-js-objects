const numbers = [12, 44, 56, 40];
for (const number of numbers) {
    console.log(number)
}


const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// for in object e use hoy 
for (const key in bottle) {
    console.log(key, bottle[key])
}

// tobe by forced for of use kora jay nicher niyome
const bottled = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
/*
3 ways to read object propety 
bottled.color
bottled['color']
bottled[key]
*/
const keys = Object.keys(bottled)
for (const key of keys) {
    // easily get the values from keys
    console.log(key, bottled[key])
}


// advance
const botttle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const pair = Object.entries(botttle);
// console.log(pair)
for (const [key, value] of Object.entries(botttle)) {
    // ekhane [key,value] destructuring hoy
    console.log(key, value)
}
