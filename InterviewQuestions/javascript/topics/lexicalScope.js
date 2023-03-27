/* 
! what is lexical scope  */
/* 
* lexical scope refers to the way variable scope is determined by the location of the variable declaration in the source code.Here's an example: */

function outerFunction() {
	const outerVar = "I'm in the outer function";

	function innerFunction() {
		const innerVar = "I'm in the inner function";
		console.log(outerVar); // prints "I'm in the outer function"
	}

	innerFunction();
}

/* In this example, outerFunction defines a variable outerVar and a nested function innerFunction. innerFunction defines its own variable innerVar, but it also references outerVar from its lexical scope.

When innerFunction is called inside outerFunction, it logs the value of outerVar to the console. This works because innerFunction has access to outerVar in its lexical scope, even though outerVar is not defined inside innerFunction.

However, if we try to access innerVar from outside innerFunction, we'll get a reference error because innerVar is not defined in the outer scope: */

function outerFunction() {
	const outerVar = "I'm in the outer function";

	function innerFunction() {
		const innerVar = "I'm in the inner function";
	}

	innerFunction();

	console.log(innerVar); // ReferenceError: innerVar is not defined
}

/* This example shows how lexical scope in JavaScript determines which variables are accessible from different parts of the code based on where they are defined. */
