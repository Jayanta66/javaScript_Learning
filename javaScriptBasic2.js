

var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;

ageMark = 33;

//Math operators
yearJohn = now -ageJohn;
yearMark = now -ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);


//Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var ifFullAge = now - yearJohn >= fullAge;
console.log(ifFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x=y=(3 + 5) * 4 - 6;
console.log(x,y);

//More operations
x *= 2;
console.log(x);
x += 10;

console.log(x);
x++
console.log(x);
x--

console.log(x);





