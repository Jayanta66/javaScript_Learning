console.log("Coding Challenge : 5");

var john = {

	fullName: 'John Smith',
	bills:[124,48,268,180,42],
	calcTips: function(){
		this.tips=[];
		this.finalValues=[];
		for(var i=0; i < this.bills.length;i++){
			var percentage;
			var bill = this.bills[i];
			if(bill < 50){
				percentage = .2;

			}else if(bill >= 50 && bill < 200){

				percentage = .15;
			}else{
			percentage = .1;
				
			}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
			
		}
	}
}






var mark = {

	fullName: 'Mark Miller',
	bills:[77,475,110,45],
	calcTips: function(){
		this.tips=[];
		this.finalValues=[];
		for(var i=0; i < this.bills.length;i++){
			var percentage;
			var bill = this.bills[i];
			if(bill < 100){
				percentage = .2;

			}else if(bill >= 100 && bill < 300){

				percentage = .15;
			}else{
			percentage = .25;
				
			}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
			
		}
	}
}

function calcAverage(tips){
	var sum = 0;
	for (var i=0; i<tips.length;i++){
	sum = sum + tips[i];
	}
	return sum / tips.length;

}




john.calcTips();
mark.calcTips();


john.average = calcAverage(john.tips);
mark.average = calcAverage(john.tips);

console.log(john,mark);

if(john.average > mark.average){
	console.log(john.fullName+'\'s family pays higer tips , with an 	average of $'+john.average);

}else if(john.average < mark.average){
	console.log(mark.fullName+'\'s family pays higer tips , with an 	average of $'+mark.average);
}

