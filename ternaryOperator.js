console.log("Ternary Operator");

var firstName ='John';
var age =16;

age >= 18 ? console.log(firstName+' drinks beer.') : console.log(firstName+' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch statement
switch(true){

	case 'age < 13':
		console.log(firstName + ' is a boy.');
		break;

	case 'age >= 13 && age < 20':
		console.log(firstName + ' is teenager.');
		break;

	case 'age >= 20 && age < 30':
		console.log(firstName + ' is a young man.');
		break;

	default:
		console.log(firstName+' is a man.');
}

//Switch statement
var job ='teacher';
switch (job){
	case 'teacher':
		console.log(firstName + ' teaches kids how to code.');
		break;

	case 'driver':
		console.log(firstName + ' drives an uber in Lisbon.');
		break;

	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;

	default:
		console.log(firstName+' does something else.');
}



//Truthy and falsy value and equality operators

var height;
if(height){
	console.log('Variable is defined');
}else{
	console.log('Variable has NOT been defined');
}


//Equality operators
if(height == '23'){
	console.log('The == operator does type coercion');

}
