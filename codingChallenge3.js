console.log("Coding Challenge : 3");

function tipCalculator(bill){

	var percentage;
	if(bill < 50){
		percentage = .2;
	}else if(bill >= 50 && bill < 200){

		percentage = .15;
	}else {
		percentage = .1;
	}
	return percentage * bill;
}

console.log(tipCalculator(300));

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),
		tipCalculator(bills[1]),
		tipCalculator(bills[2])];

var finalVaues = [bills[0] + tips[0],
			bills[1] + tips[1],
			bills[2] + tips[2],];


console.log(tips,finalVaues);