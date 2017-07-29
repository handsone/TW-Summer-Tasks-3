'use strict';

module.exports = function countSameElements(collection) {
	var answer = [];
	var Position ;
	var WordsArray =[];
	var WordsFrequency = [];
	for ( var A of collection ){
		Position = WordsArray.indexOf(A);
		if (Position === -1){
			WordsArray.push(A[0]);
			if (A.length != 1){
			WordsFrequency.push(Number(A.match(/\d+/)));
			}
			else {
				WordsFrequency.push(1);
			}
		}
		else{
			if (A.length != 1){
				WordsFrequency[Position] += Number(A.match(/\d+/));
			}
			else {
				WordsFrequency[Position] ++ ;
			}
		}

	}
	for (var i = 0 ; i < WordsArray.length ; i ++){
		answer.push({key: WordsArray[i], count: WordsFrequency[i]});
	}
	return answer ;
}
