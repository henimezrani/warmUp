// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

// NOTE: The function will iterate through the string, character by character and will add the character to the result string in an inverse order
//		Using two counter who go the opposite way ( count from 1 to str.length and reverseCount the opposite way)
// 		The counter should start at 1 so that reverse count stops before the last character to avoid adding the digit to the end of the string. 

function reverseStr(str) {

	// initializing variables
	var result = "";
	var count = 1;
	var reverseCount = str.length-1; 

	// looping through the string characters and inverting the string
	while (count < str.length) {
		result += str[reverseCount] + count;
		reverseCount--;
		count++;
	}

	// adding the last character manually to avoid adding the digit
	result += str[0];

	return result;

}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

// NOTE: the example above doesn't take into consideration the fact thatwe might have different lengths matching multiple strings
// 		For example, 2 matches for length = 2 and 2 other matches for length = 3. For that reason, my solution
//		will return array of arrays of strings to suite all possibilities

function sameLength(array) {

	// Initializing variables
	var result = [];
	var maxLength = array[0].length;
	var incLength = 0;

	// Detecting the maximum length to determine the stop condition for the while loop
	for (var i = 1 ; i < array.length ; i++) {
		if (array[i].length > maxLength) {
			maxLength = array[i].length;
		}
	} // at this point, maxLength should have the largest string length of the array


	while (incLength <= maxLength) {
		
		var tmpArray = []; // temporary variable to stock the strings with the same length

		// filling our temporary array with strings that have the same length
		for (var i = 0 ; i < array.length ; i++) {
			if (array[i].length === incLength) {
				tmpArray.push(array[i]);
			}
		}

		// If the stringcontains one element that it doesn't have any match so we should not push it into the array
		if (tmpArray.length > 1) {
			result.push(tmpArray);
		}

		incLength++; //
	}


	if (result.length === 1) {
		return result[0]; // Return only the internal array to suite the example provided
	}
	return result;
}