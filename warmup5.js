// 1-create a data model to represent your classMates
//-think of different attributes of your classMates? what do all of them have ?
//-create a factory function.
//-create an array to hold the classMates that you created and what you created to it .  
//-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//-calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

/*

classMate attributes:
- firstName: string
- lastName: string
- age: number
- nationality: string
- gender: string

*/

function makeClassMate(firstName, lastName, age, nationality, gender) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age,
		nationality: nationality,
		gender: gender
	};
}

var classMate1 = makeClassMate("Ruba", "Belhadj", 23, "Libian", "female");
var classMate2 = makeClassMate("Dhia", "Raissi", 20, "Tunisian", "male");
var classMate3 = makeClassMate("Farouk", "Guizani", 26, "Tunisian", "male");
var classMate4 = makeClassMate("Mohamed", "Sbeta", 40, "Libian", "male");

var classMates = [classMate1, classMate2, classMate3, classMate4];

function displayFriend(classMate) {
	return "This is " + classMate.firstName + " " + classMate.lastName + " from " + classMate.nationality + ". His age is " + classMate.age + "."
}

function addFriend(classMate) {
	classMates.push(classMate);
}

function nbOfMale(classMates) {
	var count = 0;
	for ( var i = 0 ; i < classMates.length ; i++){
		if (classMates[i].gender.toLowerCase() === "male")
			count++;
	}
	return count;
}

function searchMates(query, classMates){
	for ( var i = 0 ; i < classMates.length ; i++) {
		for (var key in classMates){
			if (typeof classMates[i][key] === "sting"){
				if (classMates[i][key].indexOf(query) >= 0) {
					console.log(displayFriend(classMates[i]));
				}
			} else {
				if (classMates[i][key].toString().indexOf(query) >= 0) {
					console.log(displayFriend(classMates[i]));
				}
			}
		}
	}
}


