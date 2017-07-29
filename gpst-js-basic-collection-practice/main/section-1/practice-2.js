'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	var answer  = [];
	for ( var A of collectionA  ){
		for ( var B of collectionB ){
			for ( var C of B ){
				if ( A === C ){
					answer.push(A);
				}
			}
		}
	}
	return answer ;
}
