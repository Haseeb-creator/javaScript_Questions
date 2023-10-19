{
	var x = 10;
}
// var can be access outside block scope
console.log(x);
// var can be redeclare like below
var x = 20


{
	let y = 20;
	y = 30
	// let y=30 , cannot be redeclare but can be reassigned 
	console.log(y);
}
// let cannot be access outside block it will give ReferenceError
console.log(y)


{
	const z = 20;
	// const z=30 , cannot be redeclare And  cannot be reassigned 
	console.log(z);
}
// const cannot be access outside block it will give ReferenceError
console.log(y)