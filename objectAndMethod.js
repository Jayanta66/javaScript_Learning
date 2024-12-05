console.log("Object and Method ");

var john ={

	firstName:'John',
	lastName: 'Smith',
	birthYear:1990,
	family:['Jane','Mark','Bob','Emily'],
	job:'Teacher',
	isMarried:false,
	calcAge: function(){
		this.age=2018 -this.birthYear;
	}
};

john.calcAge();
console.log(john);
