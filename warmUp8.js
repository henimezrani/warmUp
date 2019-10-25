//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function isSubset(arr, subset){

		var tmpSub = subset;
		var tmpArr = arr
		for (var j = 0 ; j < tmpSub.length ; j ++) {
			for (var k = 0 ; k < tmpArr.length ; k ++) {
				if (subset[j] === tmpArr[k]){
					tmpArr.splice(k,1);
					tmpSub.splice(j,1);
					console.log(tmpArr, tmpSub);
					j--
					k--
					break;
				}
			}
		}

		if (tmpSub.length === 0) {
			return true;
		}
		

	return false;
}


// EXTRA: Solution for ordered subsets

function isSubset(arr, subset){
	for (var i = 0 ; i < arr.length - subset.length + 1 ; i++){
		var tmpArr = arr.slice(i, subset.length+i)
		for (var j = 0 ; j < subset.length ; j++) {
			if (subset[j] !== tmpArr[j]){
				break;
			}
			if (j === subset.length-1){
				return true;
			}
		}
		
	}
	return false;
}