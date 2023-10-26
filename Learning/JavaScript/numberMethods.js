/* ------  javascript Number Methods---------- */

// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number


let y = 234.34;


// The toString() method returns a number as a string.
console.log(typeof (y.toString()), y.toString());  // string 234.34

//toExponential() returns a string, with a number rounded and written using exponential notation.
console.log(typeof (y.toExponential()), y.toExponential()); // string 2.3434e+2

//toFixed() returns a string, with the number written with a specified number of decimals:
console.log(typeof (y.toFixed()), y.toFixed(1));   //string 234.3

// toPrecision() returns a string, with a number written with a specified length:
console.log(typeof (y.toPrecision()), y.toPrecision(2)); // string 235


// valueOf() returns a number as a number.
console.log(typeof (y.valueOf()), y.valueOf(2));    //number 234.34





/* ---------------------Converting Variables to Numbers ----------------- */


let x = '230.33'


// The Number() method can be used to convert JavaScript variables to numbers:
console.log(typeof (Number(x)), Number(x));   //number 230.33

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(typeof (parseInt(x)), parseInt(x)); // number 230





