console.log("Arrays ");

//Arrays


//Initializa new array
var names =['John', 'Mark','Jane'];
var years = new Array(1998,1969,1948);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'Jayanta';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John','Smith',1990,'teacher',false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();

john.pop();

john.shift();

console.log(john);

console.log(john.indexOf(1990));
var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer ' : 'John Is a designer';
console.log(isDesigner);



