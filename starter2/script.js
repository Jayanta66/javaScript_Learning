console.log("use strict");
'use strict'

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');

console.log(" ");
console.log("Functions");
console.log("JavaScript has 2 types of Functions");

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




console.log(" ");
console.log("Functions Declarations");
console.log("#############################################");
console.log(" ");

function calcAge1(birthYear){

    return 2025 - birthYear;
}

const age1 =calcAge1(1998);

console.log(age1);

console.log(" ");
console.log("Functions expressions");
console.log("#############################################");
console.log(" ");
//function expression
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(1998);
console.log(age2);