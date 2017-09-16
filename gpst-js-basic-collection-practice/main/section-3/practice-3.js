'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var ArrayC = [] ;
	var WordsArray = [] ;
	var WordsFrequency =[] ;
	var PositionOfWord ;
	for (var A of collectionA){
		PositionOfWord  = WordsArray.indexOf(A);	
		if (PositionOfWord === -1){
			WordsArray.push(A);
			WordsFrequency.push(1);
		}
		else {
			WordsFrequency[PositionOfWord] ++;
		}
	}
	for ( var i = 0 ; i < WordsArray.length ; i ++	){
		ArrayC.push({key: WordsArray[i], count: WordsFrequency[i]});
	}

	for ( let  A of ArrayC ){
		for (var B of objectB.value){
			if (A.key === B){
				A.count -= parseInt(A.count /3);
			}
		}
	}
	return ArrayC ;
};
