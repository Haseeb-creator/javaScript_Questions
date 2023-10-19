/* 1 ----Bind method---- */

/* The JavaScript Function bind() method is used to create a new function. When a function is called, it has its own this keyword set to the provided value, with a given sequence of arguments. */


// example 1

function greeting1(lang) {
	// this keyword is refer to the person Object and lang parameter is passing through bind method
	console.log(`hello my name is ${this.name} and my language is ${lang}`);
}

// creating separate object
const person = {
	name: 'Johne',
}

//bind method created new function 
let personGreeting = greeting1.bind(person, 'English')


// calling bind function
personGreeting()   //

/* example 2 */

function greeting() {
	console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const john = {
	name: 'John',
	age: 24,
};
const jane = {
	name: 'Jane',
	age: 22,
};


let newGreeting = greeting.bind(john)
newGreeting(); // Hi, I am John and I am 24 years old

let secondGreeting = greeting.bind(jane)
secondGreeting()

/* 2 ------ call method --------- */

/* The call method sets the this inside the function and immediately executes that function.*/

/* The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword. */

function greet(greeting) {
	console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const johni = {
	name: 'John',
	age: 24,
};
const janei = {
	name: 'Jane',
	age: 22,
};
// Hi, I am John and I am 24 years old
greet.call(johni, 'Hi');
// Hi, I am Jane and I am 22 years old
greet.call(janei, 'Hello');


/* 3 ---------------apply method ---------- */


/* The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values. */



/* syntax -----------------> function.apply(thisArg, [argumentsArr]) */

function greet4(greeting, lang) {
	console.log(lang);
	console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const johnt = {
	name: 'John',
	age: 24,
};
const janet = {
	name: 'Jane',
	age: 22,
};
// Hi, I am John and I am 24 years old
greet4.apply(johnt, ['Hi', 'en']);
// Hi, I am Jane and I am 22 years old
greet4.apply(janet, ['Hola', 'es']);






// conclusion: 
/* 
how this keyword behaves differently in JavaScript than in other object-oriented languages. The call, bind and apply methods can be used to set the this keyword independent of how a function is called.

The bind method creates a copy of the function and sets the this keyword, while the call and apply methods sets the this keyword and calls the function immediately.
*/
