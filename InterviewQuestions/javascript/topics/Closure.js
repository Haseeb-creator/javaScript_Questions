
/*  
	* 2  : Can you explain the concept of closures in JavaScript?

A closure is a function that has access to the variables in its outer lexical scope, even after the outer function has returned. In other words, the inner function "closes over" the variables in the outer function and retains access to them.

Example:

*/
function outer() {
	var x = 10;
	function inner() {
		console.log(x);
	}
	return inner;
}
var closure = outer();
closure(); // output: 10



