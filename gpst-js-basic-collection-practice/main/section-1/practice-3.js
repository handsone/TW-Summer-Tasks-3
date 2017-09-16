module.exports = function collectSameElements(collectionA, objectB) {
	var answer  = [];
	for ( var A of collectionA ){
		for ( var B of objectB.value ){
			if ( A === B ){
				answer.push(A);
			}
		}
	}
	return answer ;
};
