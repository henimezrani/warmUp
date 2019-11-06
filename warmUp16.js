// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4

// text consists of lower case English letters only.

function maxInstances(string) {
	var letters = {
		b: 1,
		a: 1,
		l: 2,
		o: 2,
		n: 1
	}
	var maximum = Number.POSITIVE_INFINITY;
	for (var key in letters){
		var tmpMax = 0
		while (string.indexOf(key) >= 0){
			tmpMax++
			string = string.slice(0, string.indexOf(key)) + string.slice(string.indexOf(key) + 1)
			console.log(string)
		}
		Math.floor(tmpMax = tmpMax/letters[key])
		if (tmpMax<maximum){
			maximum = tmpMax;
		}
	}
	return maximum;
}