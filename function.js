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