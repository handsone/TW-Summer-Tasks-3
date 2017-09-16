module.exports = function collectSameElements(collectionA, objectB) {
	var answer = []; 
	for ( var A of collectionA ){
		for ( var B of objectB.value ){
			if (A.key === B){
				answer.push(B);
			}
		}
	}
	return answer ;
};
