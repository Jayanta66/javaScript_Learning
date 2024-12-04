console.log("Function ");

function calculateAge(birthYear){
	return 2024 - birthYear;

}

var ageJohn = calculateAge(1998);
console.log(ageJohn);



function yearUntilRetirement(year, firstName){

	var age = calculateAge(year);
	var retirment = 65 - age;

	if(retirment > 0){
		console.log(firstName+' retires in '+ retirment + ' years.');

	}else{
		console.log(firstName+' is already retired.');

	}

}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'John');

//Function Declaration
//Function whatDoYouDo(job,firstName){}


//Function expression
var whatDoYouDo = function(job,firstName){

	switch(job){

		case 'teacher':
			return firstName+' teaches kids how to code';

		case 'driver':
			return firstName+' drives a cab in Lisbon';

		case 'designer':
			return firstName+' designs beautiful websites';


		default:
			return firstName+' does something else';
	}

}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('designer', 'Jayanta'));



