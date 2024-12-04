console.log("Coding Challenge : 2");

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (119 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn,scoreMike,scoreMary);

if(scoreJohn < scoreMike && scoreMike > scoreMary){

console.log('John\'s team wins with'+scoreJohn+' points');
}else if(scoreJohn > scoreMike && scoreJohn > scoreMary){

console.log('Mike\'s team wins with'+scoreJohn+' points');
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){

console.log('Mike\'s team wins with'+scoreJohn+' points');
}