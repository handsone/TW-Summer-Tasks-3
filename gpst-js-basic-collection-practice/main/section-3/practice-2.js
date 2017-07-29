'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	for (var A of collectionA){
		for ( var B of objectB.value ){
			if (A.key === B){
				A.count -= parseInt(A.count / 3);
			}
		}
	}
	return collectionA ;
}

