/* 1 : finding next Odd */

/* input  : -> let odd = [5, 7, 9, 11, 15, 17] */
/* output : -> 13 */

let odd = [5, 7, 9, 11, 15, 17]


for (let i = 0; i < odd.length; i++) {
	const current = odd[i]
	const next = current + 2
	if (odd[i + 1] !== next && next <= odd[odd.length - 1]) {
		console.log(next);
	}
}