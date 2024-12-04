console.log("Coding Challenge :1");

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohm = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark,BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\s BMI higher than John\'s?' +markHigherBMI);

if(BMIMark > BMIJohn){
console.log('Mark\'s BMI is highter than John\'s');

}else {
console.log(John\'s BMI is highter than Mark\'s.');

}