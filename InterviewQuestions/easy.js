/* 

1 : What is the difference between var, let, and const in JavaScript?

2 : Can you explain the concept of closures in JavaScript?

3 : How do you handle asynchronous programming in JavaScript?

4 : Can you explain the difference between synchronous and asynchronous code execution in JavaScript?

5 : Can you explain the concept of hoisting in JavaScript?

6 : Can you explain the difference between == and === in JavaScript?

7 : Can you explain the concept of event bubbling in JavaScript?

8 : Can you explain the difference between let and const in JavaScript?

9 : Can you explain the concept of promises in JavaScript?

10 : Can you explain the difference between callbacks and promises in JavaScript?

11 : How do you manage state in React?

12 : Can you explain the difference between props and state in React?

13 : Can you explain the concept of virtual DOM in React?

14 : Can you explain the difference between a class component and a functional component in React?

15 : How do you handle routing in React?
 
16 : How do you handle form input in React?

17 : How do you handle events in React?

18 : Can you explain the concept of JSX in React?

19 : How do you handle conditional rendering in React?

20 : Can you explain the difference between props.children and this.props.children in React?

21 : How do you handle async operations in React?

22 : Can you explain the concept of higher-order components (HOC) in React?

23 : Can you explain the difference between controlled and uncontrolled components in React?

24 : How do you handle error boundaries in React?

25 : Can you explain the concept of context in React?

*/


/*  1 : What is the difference between var, let, and const in JavaScript  */

/*
	var is a keyword used to declare variables in JavaScript. It has function scope, which means that the variable is accessible throughout the function it is declared in.

let and const are also used to declare variables in JavaScript, but they have block scope, which means that the variable is accessible only within the block it is declared in. The difference between let and const is that let can be reassigned, whereas const is a constant and cannot be reassigned.

Example  :
*/

var x = 10;
function example() {
	var x = 20;
	console.log(x); // output: 20
}
example();
console.log(x); // output: 10

let y = 30;
{
	let y = 40;
	console.log(y); // output: 40
}
console.log(y); // output: 30

const z = 50;
{
	const z = 60;
	console.log(z); // output: 60
}
console.log(z); // output: 50



/* 
2 : Can you explain the concept of closures in JavaScript?

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


/* 
3 : How do you handle asynchronous programming in JavaScript?

Asynchronous programming in JavaScript can be handled using callbacks, promises, or async/await.

Example using callbacks:
*/
function fetchData(callback) {
	setTimeout(function () {
		callback('Data');
	}, 1000);
}
fetchData(function (data) {
	console.log(data); // output: Data
});


/* 
Example using promises:
*/
function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Data');
		}, 1000);
	});
}
fetchData().then(function (data) {
	console.log(data); // output: Data
});

/* 
Example using async/await:
*/
async function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Data');
		}, 1000);
	});
}
async function getData() {
	const data = await fetchData();
	console.log(data); // output: Data
}
getData();



/* 
4 : Can you explain the difference between synchronous and asynchronous code execution in JavaScript?
Synchronous code execution means that each statement is executed one after the other, and the next statement cannot start until the previous statement has finished executing. Asynchronous code execution means that the code can continue executing while waiting for a long-running task to complete.

Example of synchronous code:
*/

console.log('Statement 1'); //output: Statement 1
console.log('Statement 2'); //output: Statement 2
console.log('Statement 3'); //output: Statement 3


/* Example of asynchronous code using callbacks: */

console.log('Statement 1'); //output: Statement 1
setTimeout(function () {
	console.log('Statement 2'); //output: Statement 2
}, 1000);
console.log('Statement 3');  //output: Statement 3


/* 
5 : Can you explain the concept of hoisting in JavaScript?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes before the code is executed. However, only the declarations are moved, not the assignments.

Example:
*/
console.log(x); // output: undefined
var x = 10;

/* This code is equivalent to: */

var x;
console.log(x); // output: undefined
x = 10;


/* 
6 : Can you explain the difference between == and === in JavaScript?
== is a loose equality comparison operator, which means that it converts the operands to a common type before comparing them. === is a strict equality comparison operator, which means that it does not perform type coercion and checks for both value and type equality.

Example: 
*/

console.log(1 == '1'); // output: true
console.log(1 === '1'); // output: false


/* 
7 : Can you explain the concept of event bubbling in JavaScript?
Event bubbling is a mechanism in JavaScript where when an event is triggered on a nested element, it first triggers the event on the nested element and then propagates the event up to its parent elements in the DOM tree. This allows for event delegation, where the parent element can handle the event on behalf of the child element.

Example:
*/
<div onclick="console.log('Parent clicked')">
	<button onclick="console.log('Child clicked')">Click me</button>
</div>

/* When the button is clicked, the output is: */

// output: Child clicked
// output: Parent clicked


/* 
8 : Can you explain the difference between let and const in JavaScript?
let and const are both used to declare block-scoped variables in JavaScript. The main difference between the two is that let allows the variable to be reassigned, whereas const creates a read-only reference to a value that cannot be reassigned.

Example using let:
*/

let x = 5;
x = 10;
console.log(x); // output: 10

/* Example using const: */
const yz = 5;
yz = 10; // Error: Assignment to constant variable.
console.log(yz);


/* 
9 : Can you explain the concept of promises in JavaScript?
Promises in JavaScript are a way to handle asynchronous operations. A Promise is an object that represents a value that may not be available yet, but will be resolved eventually. Promises can be in one of three states: pending, fulfilled, or rejected.

Example:
*/
function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Data');
		}, 1000);
	});
}
fetchData().then(function (data) {
	console.log(data); // output: Data
});


/* 
10 : Can you explain the difference between callbacks and promises in JavaScript?
Both callbacks and promises are used to handle asynchronous operations in JavaScript. A callback is a function that is passed as an argument to another function and is called when the operation completes. A Promise is an object that represents a value that may not be available yet, but will be resolved eventually. Promises are often considered a better solution than callbacks because they allow for better error handling and code readability.

Example using callbacks:
*/

function fetchData(callback) {
	setTimeout(function () {
		callback('Data');
	}, 1000);
}
fetchData(function (data) {
	console.log(data); // output: Data
});

/* Example using promises: */

function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Data');
		}, 1000);
	});
}
fetchData().then(function (data) {
	console.log(data); // output: Data
});


/* 
11 : How do you manage state in React?
State in React can be managed using the useState hook in functional components. The useState hook allows us to declare state variables, and also provides a function to update the state variable.

Example:
*/
import React, { useState } from 'react';

function Example() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}


/* 
12 : Can you explain the difference between props and state in React?
Props are properties that are passed to a component from its parent component. They are read-only and cannot be modified by the child component. State, on the other hand, is internal to the component and can be modified using the setState function.

Example:
*/

function Parent() {
	return <Child name="John" />;
}

function Child(props) {
	return <p>Hello, {props.name}!</p>;
}


/* 
13 : Can you explain the concept of virtual DOM in React?
The virtual DOM is a lightweight representation of the actual DOM in memory. Whenever the state of a component changes, React uses the virtual DOM to calculate the changes that need to be made to the actual DOM, and then updates only the necessary parts of the actual DOM.

Example:
*/
import React, { useState } from 'react';

function Example() {
	const [name, setName] = useState('John');

	function handleChange(event) {
		setName(event.target.value);
	}

	return (
		<div>
			<input type="text" value={name} onChange={handleChange} />
			<p>Hello, {name}!</p>
		</div>
	);
}

/* 
14 : Can you explain the difference between a class component and a functional component in React ?
	Class components are defined using the class keyword and have a render method that returns the JSX.They also have access to the component lifecycle methods.Functional components, on the other hand, are defined using a function and return the JSX directly.They do not have access to the component lifecycle methods.

Example of a class component:
	*/
import React, { Component } from 'react';

class Example extends Component {
	render() {
		return <p>Hello, world!</p>;
	}
}


/* Example of a functional component: */
import React from 'react';

function Example() {
	return <p>Hello, world!</p>;
}


/* 
15 : How do you handle routing in React?
Routing in React can be handled using the react-router-dom package. The package provides various components to handle routing, such as BrowserRouter, Route, and Link.

Example:
*/
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Home() {
	return <h1>Welcome to the homepage!</h1>;
}

function About() {
	return <h1>Learn more about us!</h1>;
}

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</BrowserRouter>
	);
}


/* 
16 : How do you handle form input in React?
In React, form input can be handled using state. We can create a state variable to hold the value of the input and update it using an onChange event handler.

Example:
*/
import React, { useState } from 'react';

function MyForm() {
	const [name, setName] = useState('');

	function handleChange(event) {
		setName(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		alert('Name: ' + name);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={handleChange} />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

/* 
17 : How do you handle events in React?
In React, events can be handled using event handlers. We can add event listeners to elements using the onClick, onMouseOver, onKeyPress, etc. attributes.

Example:
*/

import React from 'react';

function MyButton() {
	function handleClick() {
		alert('Button clicked!');
	}

	return (
		<button onClick={handleClick}>
			Click me
		</button>
	);
}


/* 
18 : Can you explain the concept of JSX in React?
JSX is a syntax extension of JavaScript that allows us to write HTML-like code in JavaScript. It allows us to write code that looks like HTML, but is actually JavaScript code.

Example:
*/
import React from 'react';

function MyComponent() {
	return (
		<div>
			<h1>Hello, world!</h1>
			<p>This is a paragraph.</p>
		</div>
	);
}

/* 
19 : How do you handle conditional rendering in React?
In React, conditional rendering can be handled using the ternary operator or the logical AND operator. We can use these operators to conditionally render elements.

Example:
*/
import React, { useState } from 'react';

function Example() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function handleLogin() {
		setIsLoggedIn(true);
	}

	function handleLogout() {
		setIsLoggedIn(false);
	}

	return (
		<div>
			{isLoggedIn ? (
				<button onClick={handleLogout}>Logout</button>
			) : (
				<button onClick={handleLogin}>Login</button>
			)}
		</div>
	);
}


/* 
20 : Can you explain the difference between props.children and this.props.children in React?
In a functional component, props.children refers to the children elements of a component that are passed as props. Whereas, in a class component, this.props.children is used to access the children elements passed to a component as props.

Example:
*/
import React from 'react';

function Button(props) {
	return (
		<button>
			{props.children}
		</button>
	);
}

function Example() {
	return (
		<div>
			<Button>Click me</Button>
		</div>
	);
}


/* 
21 : How do you handle async operations in React?
Async operations in React can be handled using async and await or by using promises. We can use the useState hook to manage the state of our component and update it when the async operation completes.

Example using async and await:
*/
import React, { useState } from 'react';

function Example() {
	const [data, setData] = useState(null);

	async function fetchData() {
		const response = await fetch('https://api.example.com/data');
		const result = await response.json();
		setData(result);
	}

	return (
		<div>
			<button onClick={fetchData}>Fetch data</button>
			{data && (
				<div>
					<h2>{data.title}</h2>
					<p>{data.body}</p>
				</div>
			)}
		</div>
	);
}


/* 
22 : Can you explain the concept of higher-order components (HOC) in React?
Higher-order components (HOC) in React are functions that take a component as an argument and return a new component with additional functionality. HOCs are useful for sharing code between components, adding behaviors to components, and abstracting common functionality.

Example:
*/
import React from 'react';

function withColor(WrappedComponent, color) {
	return function (props) {
		return <WrappedComponent {...props} style={{ color: color }} />;
	}
}

function MyComponent(props) {
	return <div>Hello, world!</div>;
}

const ColoredComponent = withColor(MyComponent, 'red');

function Example() {
	return <ColoredComponent />;
}


/* 
23 : Can you explain the difference between controlled and uncontrolled components in React?
Controlled components in React are components that have their state controlled by React. The value of the component is stored in state and updated using the onChange event. Uncontrolled components are components that have their state managed by the DOM, and React only reads the current value of the component when it is needed.

Example of controlled component:
*/
import React, { useState } from 'react';

function Example() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<input type="text" value={value} onChange={handleChange} />
	);
}


/* Example of uncontrolled component: */
import React from 'react';

function Example() {
	function handleSubmit(event) {
		event.preventDefault();
		const value = event.target.elements.input.value;
		alert(`Value: ${value}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="input" />
			<button type="submit">Submit</button>
		</form>
	);
}

/* 
24 : How do you handle error boundaries in React?
Error boundaries in React are components that catch errors in their child components and display an error message instead of crashing the whole application. Error boundaries are defined using the componentDidCatch lifecycle method.

Example:
*/
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

function Example() {
	return (
		<div>
			<ErrorBoundary>
				<SomeComponent />
			</ErrorBoundary>
		</div>
	);
}


/*  
25 : Can you explain the concept of context in React?  

Context in React is a way to pass data down the component tree without having to pass props down manually at every level. Context provides a way to share values, such as a theme or user information, across the entire component tree. It's an alternative to using props drilling, which can be cumbersome and make the code harder to read and maintain.

To create a context in React, we can use the createContext() method. This creates a context object that can be used to provide and consume data.

Here's an example of how to use context in React:
*/
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function App() {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={count}>
			<div>
				<h1>Count: {count}</h1>
				<Counter />
			</div>
		</CountContext.Provider>
	);
}

function Counter() {
	const count = useContext(CountContext);

	function handleIncrement() {
		setCount(count + 1);
	}

	return (
		<div>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
}
