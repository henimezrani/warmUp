// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function findGCD(number1, number2, divisor){
	if (arguments[2] === undefined){
		if (number2 > number1){
			return findGCD(number2, number1, number1)
		} else {
			return findGCD(number1, number2, number2)
		}
	}

	if (number1 % divisor === 0 && number2 % divisor === 0){
		return divisor
	}
	return findGCD(number1, number2, --divisor)
}



// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2){
	if (number1 ===0){
		return number2;
	}
	return sum(--number1, ++number2)
}




divisor(32,17)