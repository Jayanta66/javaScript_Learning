
//BUDGET CONTROLLER
var budgetController = (function(){

var x = 23;
var add = function(a){
	return x +a;

	}

	return{
		publicTest: function(b){
			console.log(add(b));
		
		}


	}


})();

//UI CONTROLLER
var UIController = (function(){



})();



//GLOBAL CONTROLLER
var UIController = (function(budgetCtrl,UIctrl){

	var z = budgetCtrl.publicTest(5);
	return {
		anotherPublic:function(){
		console.log(z);
		}
			
	}


})(budgetController, UIController);