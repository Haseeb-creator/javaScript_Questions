/* const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
}

console.log(person.fullName());

	*/
function Car(name) {
	this.name = name
	this.start = function () {
		console.log(this.name + ' started');
	}
}

let car = new Car('swift')

car.start()

const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
};

const fullNameFunc = person.fullName;
console.log(fullNameFunc()); // This will log "undefined undefined" because the value of 'this' has changed to the global object

