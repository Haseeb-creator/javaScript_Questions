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

let quote1 = 'the dog can smell dog can bark'

console.log(quote1.replaceAll('dog', 'wolfe'));