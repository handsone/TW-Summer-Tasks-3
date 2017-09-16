module.exports = function collectSameElements(collectionA, collectionB) {
	var answer  = [];
	for ( var A of collectionA ){
		for (var B of collectionB){
			if ( A === B ){
				answer.push(A);
			}
		}
	}
	return answer ;
};
