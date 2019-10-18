// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females =["Fatima", "Ruba", "Hania", "Hanan", "Fooz", "Lina"];
var males = ["Farouk", "Meher", "Dhia", "Zied", "Najah", "Bilel", "Abdessalam", "Mohammed"];
var instructors = ["Tamara", "Youssef", "Seif", "Matt", "Omar"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function returnMid(array){
	return array[Math.floor(array.length/2)]
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function changeNum(array){
	return map(array, function(elem, i){
		if (i % 2 === 0){
			return elem * 2;
		} else {
			return elem;
		}
	})
}