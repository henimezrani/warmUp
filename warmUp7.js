// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


// A - 1


var firstName = "Mohamed";
var lastName = "Slamia";

var fullName = firstName + " " + lastName;

fullname; // => "Mohamed Slamia"


// A - 2


function is13MultipleOf3() {
	return 13 % 3 === 0 ? "13 is multiple of 3" : "13 is NOT multiple of 3"
}

is13MultipleOf3() // => 13 is NOT multiple of 3


// A - 3


function averageAge(arr) {
	var total = 0;
	for (var i = 0 ; i < arr.length ; i++) {
		total += arr[i];
	}
	return total / arr.length;
}

averageAge([13,14,13,15,16,17,19,13,16,15]) // => 15.1


// A - 4 


function calcAgeInSeconds(age) {
	return age * 365 * 24 * 60 * 60;
}

calcAgeInSeconds(23); // => 725328000