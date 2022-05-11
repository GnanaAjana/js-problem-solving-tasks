
/* start */
/*
  Move non zeros to end of the array
	Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

const moveZeroEndArray = (arr) => {

	let index = 0;
  while(index < arr.length) {
  	if (arr[index] === 0) {
  		arr.push(arr.splice(index, 1)[0]);
  	}
    index++;
  }
 	return arr;
}

let changeArr = [1,5,0,2,0,3];

console.log('changeArr');
console.log(moveZeroEndArray(changeArr))

/* end */

/* start */

/* 
	You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
	
	The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
	
	Write a method that takes the array as an argument and returns this "outlier" N.
    
	Test cases: 
	
	[2, 4, 100, 4, 11, 2602, 36] → 11
	
	[160, 3, 1719, 19, 11, 13, -21] → 160

*/

const compressedData = (arr) => {
	let odd = [];
  let even = [];
  arr.forEach((item) => {
		(item % 2 === 0) &&  even.push(item);
    (item % 2 === 1) && odd.push(item);
	});
	return odd.length < even.length ? odd : even;
}

let evenMost = [2, 4, 100, 4, 11, 2602, 36];

let oddMost = [160, 3, 1719, 19, 11, 13, -21];

console.log('check for evenMost', evenMost);
console.log('output as od:', compressedData(evenMost));
console.log('check for oddMost', oddMost);
console.log('output oddMost:', compressedData(oddMost));

/* end */
