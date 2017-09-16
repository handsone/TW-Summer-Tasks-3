module.exports = function countSameElements(collection) {
	var answer = [] ;
	var WordsArray = [] ;
	var WordsFrequency = [] ;
	var Position ;
	for ( var A of collection ){
		Position = WordsArray.indexOf(A);
		if (Position === -1){
			WordsArray.push(A);
			WordsFrequency.push(1);
		}
		else {
			WordsFrequency[Position] ++ ;
		}
	}
	for ( var i = 0 ; i < WordsArray.length ; i ++ ){
		answer.push({key: WordsArray[i], count: WordsFrequency[i]});
	}
	return answer ;
};
