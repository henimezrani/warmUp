// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .


function invertStr(str) {
	var tmpArr = [];
	var spaceIndx = 0;
	var countWords = 0;
	var result = "";

	for (var i = 0; i < str.length; i++) {
		if ((str[i] === " ") || (i === str.length-1)){
			var tmpStr = ""
			for ( var j = spaceIndx ; j < i ; j++){
				tmpStr += str[j]
			}
			if (i === str.length-1) {
				tmpStr += str[i]
			}
			tmpArr[countWords] = tmpStr
			spaceIndx = i + 1
			countWords++;
		}
	}
	for (var i = tmpArr.length-1 ; i >=0 ; i--){
		result += tmpArr[i]
		if (i !== 0) {
			result += " "
		}
	}
	return result;

}