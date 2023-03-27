/* 
* What is Hoisting in javascript ?
*/

/* Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scope before code execution. This means that you can use a variable or a function before it has been declared, without getting an error.

However, it's important to note that only the declaration is hoisted, not the assignment. This means that if you try to access the value of a variable before it has been assigned a value, you will get an "undefined" value.

Here is an example to illustrate hoisting in JavaScript: */

console.log(x); // undefined
var x = 10;

/* In the above example, the variable "x" is declared using the "var" keyword and is then assigned the value of 10. However, when we try to log the value of "x" before it has been assigned a value, we get "undefined" instead of an error.

Hoisting also applies to function declarations. Here is an example: */

foo(); // "hello"

function foo() {
	console.log("hello");
}

/* In this example, the function "foo" is declared and defined after it has been called. However, because of hoisting, the function declaration is moved to the top of the scope and can be called before it has been defined.

It's important to understand hoisting in JavaScript to avoid unexpected behavior in your code. It's best practice to declare and initialize variables and functions before using them to avoid confusion and errors. */


/* example 2 : */

hosting()

function hosting() {

	name = 'haseeb'
	console.log(name);
	console.log(age);

	var name
	let age = 26

}

