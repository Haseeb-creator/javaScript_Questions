/*  -----slice ------------ */


let text = "Apple Banana Kiwi";
let part = text.slice(7, 13);


console.log(text.substring(6, 12));
// console.log(text.substr(0, 8)); strick mean deprecated.
console.log(part);


/*-------- replace -------  */


// The replace() method replaces a specified value with another value in a string:

let quote = 'hello haseeb coding hard'
console.log(quote.replace('haseeb', 'naseer'));   //hello naseer coding hard
console.log(quote);   //hello haseeb coding hard


// In 2021, JavaScript introduced the string method replaceAll():

let quote1 = ' The dog can smell dog can bark '

console.log(quote1.replaceAll('dog', 'wolf')); // the wolf can smell wolf can bark


let newQuote = quote1.substring(0, 3).concat(quote1.substring(7, quote1.length))

console.log(newQuote.toUpperCase());

console.log(newQuote.toLowerCase());

// The concat() method can be used instead of the plus operator.
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

console.log(quote1.trimStart());

// The trim() method removes whitespace from both sides of a string:

// 1 trim() removes the bothSide of the whiteSpace
// 2 trimStart() removes the white space from the starting
// 3 trimEnd() removes the white space from the end of the string

console.log(quote1.trimStart().padEnd(50, 'hello'));

// The padEnd() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

//  1 padStart(number , changeString);
//  2  padEnd(number, string)


console.log(quote1.charAt(15));

// The charAt() method returns the character at a specified index (position) in a string:

let textValue = "a,b,c,d,e,f";
const myArray = textValue.split(",");

console.log(myArray);
// A string can be converted to an array with the split() method:


/*  --------->
	// question <------------  */

let newString = 'hello my name';

let newArrayString = newString.split(' ')

console.log(newArrayString);

let result = ''

for (let i = 0; i < newArrayString.length; i++) {
	const element = newArrayString[i]

	result = result + element.charAt(0).toUpperCase() + element.slice(1, element.length + 1) + " "

}
console.time()
console.log(result);
console.timeEnd()
// Hello My Name


let myName = new String('hello follows')

console.log(myName.split(' '));

//  --------------  indexOf() and lastIndexOf() -------------------


// Both methods accept a second parameter as the starting position for the search:

// The indexOf() method returns the index (position) the first occurrence of a string in a string:

let textNew = "Please locate where 'locate' occurs!";

console.log(textNew.indexOf('locate', 5));  //search start from the index value 5  // 7  


// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let textNew1 = "Please locate where 'locate' occurs!";

console.log(textNew1.lastIndexOf('locate')); // 21


//-------------------- String search() --------------------

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// The search() method returns the position of the first occurrence of a string in a string.

let text1 = "Please locate where 'locate' occurs!";
console.log(text1.search("locate"))  // 7



/*
The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/



// -----------------------  match() string  ------------

// The match() method returns an array containing the results of matching a string against a string(or a regular expression).

let text2 = "The rain in SPAIN stays mainly rain in Rain the plain";

console.log(text2.match(/rain/gi));  // [ 'rain', 'rain', 'Rain' ]

// regular expression g stands for global and i stands for case-insensitive


/* ---------------- String includes() ------------- return true or false */
//The includes() method returns true if a string contains a specified value.


let text3 = "Hello world, welcome to the universe.";


console.log(text3.includes("Hello"));  // true

//Check if a string includes "world". Start at position 12:

console.log(text3.startsWith("welcome", 13)); // true


/* ----------------------- String startsWith() and endWith()  --- return a true and false values */

//The startsWith() method returns true if a string begins with a specified value.


let text4 = "Hello world, welcome to the universe.";
console.log(text4.startsWith("Hello")); // true

console.log(text4.startsWith("world", 6)); // true


// The endsWith() method returns true if a string ends with a specified value.

let text5 = "John Doe";
console.log(text5.endsWith("Doe")); // true

console.log(text4.endsWith("world", 11)); // true


/* ----------------------------------------all methods of the string--------------------------------------------------------------- */

// charAt()
// It provides the char value present at the specified index.
// charCodeAt()
// It provides the Unicode value of a character present at the specified index.
// concat()
// It provides a combination of two or more strings.
// indexOf()
// It provides the position of a char value present in the given string.
// lastIndexOf()
// It provides the position of a char value present in the given string by searching a character from the last position.
// search()
// It searches a specified regular expression in a given string and returns its position if a match occurs.
// match()
// It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
// replace()
// It replaces a given string with the specified replacement.
// substr()
// It is used to fetch the part of the given string on the basis of the specified starting position and length.
// substring()
// It is used to fetch the part of the given string on the basis of the specified index.
// slice()
// It is used to fetch the part of the given string.It allows us to assign positive as well negative index.
// toLowerCase()
// It converts the given string into lowercase letter.
// toLocaleLowerCase()
// It converts the given string into lowercase letter on the basis of host ? s current locale.
// toUpperCase()
// It converts the given string into uppercase letter.
// toLocaleUpperCase()
// It converts the given string into uppercase letter on the basis of host ? s current locale.
// toString()
// It provides a string representing the particular object.
// valueOf()
// It provides the primitive value of string object.
// split()
// It splits a string into substring array, then returns that newly created array.
// trim()
// It trims the white space from the left and right side of the string.