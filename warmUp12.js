/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7 2 
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

function mostRepeted(str){
    var mostRepetedChar = ""
    var maxCount = 0;
    for (var i = 0; i < str.length; i++) {
        count = 0
        for (var j = 0; j < str.length; j++) {
            if (str[i] = str[j]) {
                count++
            }
        }
        if (count>maxCount){
            mostRepetedChar = str[i];
            maxCount = count;
        }
    }
    return mostRepetedChar;
}

function detectMin (array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min
}

function smallestLargest (str, size) {
    if (str.length> size*2){ 

        // Meaning that there will be the number 100 in the range
        // We start by 100, go up until we dont find a number n
        // n-1 will be the max and n-range the min

        var mostRepetedCharacter ="10"
        var otherCount =0;
        var tmpNbr;
        while(true){
            tmpNbr = mostRepetedCharacter + otherCount.toString()
            if (str.indexOf(tmpNbr) < 0){
                return [tmpNbr-10, tmpNbr-1]
                break;
            }
            otherCount++
            if (otherCount === 10) {
                mostRepetedCharacter = (parseInt(mostRepetedCharacter,10)+1).toString()
                otherCount = 0
            }
        }
    }
    if ((str.length === size) && (size <= 10)){

        // Meaning that the range is small and the numbers in the string are between 0 and 9
        //Just detect the min and the max

        var arr = str.split('');
        return [detectMin(arr), detectMin(arr)+size-1]
    }


    // This is where all the numbers are either 1 or 2 digit long
    
    var mostRepetedCharacter = mostRepeted(str);
    var otherCount =0;
    var tmpNbr;
    while(true){
        tmpNbr = mostRepetedCharacter+ otherCount.toString()
        if (str.indexOf(tmpNbr) < 0){
            return [tmpNbr-10, tmpNbr-1]
            break;
        }
        otherCount++
        if (otherCount === 10) {
            mostRepetedCharacter = (parseInt(mostRepetedCharacter,10)+1).toString()
            otherCount = 0
        }
    }
}