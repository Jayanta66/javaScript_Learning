console.log("use strict");
'use strict'

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');

console.log(" ");
console.log("Functions");
console.log("#############################################");
console.log(" ");

function logger(){

    console.log("My Name is Jayanta Halder");
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice =fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice =fruitProcessor(5,56);
console.log(appleOrangeJuice);
