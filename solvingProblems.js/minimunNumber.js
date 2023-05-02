let array = [2, 1, 3, 45, 34, 6, 56]


/* let minmunNumber = array.filter((a, b) => b > a)

console.log(...minmunNumber); */

//using math and apply
console.log(Math.max.apply(Math, array));

//using spread operators
console.log(Math.min(...array));

