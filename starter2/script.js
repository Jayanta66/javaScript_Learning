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

// function fruitProcessor(apples, oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

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


console.log(" ");
console.log("Arrow Function ");
console.log("#############################################");
console.log(" ");

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = birthYear => {
    const age = 2017 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));


console.log(" ");
console.log("Function calling into another function");
console.log("#############################################");
console.log(" ");

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces =cutFruitPieces(apples);
    const orangePieces =cutFruitPieces(oranges);

  //  console.log(apples,oranges);
    const juice = `Juice with ${applePieces} Pieces of apples and ${orangePieces} Pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));


console.log(" ");
console.log("Coding Challange : 1");
console.log("#############################################");
console.log(" ");

const calcAverage = (a,b,c) => (a+b+c) /3;
console.log(calcAverage(3,4,5));

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

    }else{
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins,scoreKoalas);

checkWinner(576,111);

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);
