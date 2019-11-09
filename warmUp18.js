// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"


function countChars(string) {
	var tmpobj = {}
	var result = ""
	for (var i = 0; i < string.length; i++) {
		if (tmpobj.hasOwnProperty(string[i])){
			tmpobj[string[i]] +=1;
			result+= tmpobj[string[i]];
		} else {
			tmpobj[string[i]] =1;
			result+= tmpobj[string[i]];
		}
	}
	return result;
}