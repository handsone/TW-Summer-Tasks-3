module.exports = function countSameElements(collection) {

	var word ;
	var wordsarray = [];
	var wordsfrequency = [] ;
	var PositionOfWord ;

	function FindWordPosition (wordA , arrayA ){
		var position = -1 ;
		for ( var i = 0 ; i < arrayA.length ; i ++ ){
			if ( wordA === arrayA[i] ){
				position = i ;
				break ;
			}
		}
		return position ;
	}
	
	for ( var i = 0 ; i < collection.length ;i ++ ) {
		word = collection[i][0] ;
		PositionOfWord = FindWordPosition(word , wordsarray);
		if ( PositionOfWord === -1 ){
			if ( collection[i].length !== 1 ) {
				wordsarray.push(word);
				wordsfrequency.push(Number(collection[i].match(/\d+/)));
			}
			else {
				wordsarray.push(word);
				wordsfrequency.push(1);
			}
		}
		else {
			if (collection[i].length !== 1) {
				wordsfrequency[PositionOfWord] += Number(collection[i].match(/\d+/));
			}
			else {
				wordsfrequency[PositionOfWord] += 1 ;
			}
			
		}

	}
	
	var answer = [];
	for ( i = 0 ; i < wordsarray.length ; i ++ ){
		answer.push({name: wordsarray[i], summary: wordsfrequency[i]});
	}
	return answer;
};
