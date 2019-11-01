// Create an HTML, CSS, JS files and connect them together.
// Create a text field and a button below it in HTML file
// Create an empty unordered list  below the button
// Create two CSS classes, each with a different color property
// Using jQuery, create a function, that takes the input from the text field, creates a list item and add it to the unordered list, then add a class to the added item alternatively (So first time Class1 then next time Class2 then Class1 and repeat)

// Good Luck!

var count= 0;

$('button#triger').on('click', function(){

	if (count % 2 === 0){
		count++
		if (count === 0) {
			$('ul').append("<li>" + $('input#textField').val() + "</li>").addClass("class1")
		} else {
			$('ul').append("<li>" + $('input#textField').val() + "</li>").removeClass("class2").addClass("class1")
		}
		
	} else {
		count++
		if (count === 0) {
			$('ul').append("<li>" + $('input#textField').val() + "</li>").addClass("class2")
		} else {
			$('ul').append("<li>" + $('input#textField').val() + "</li>").removeClass("class1").addClass("class2")
		}
	}

})
