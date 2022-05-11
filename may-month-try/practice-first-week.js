/* evenness start */

// Evenness Algorithm try

// evenness([1,1,2,1]) ⇒ 2 

function evenness(value) {
	let odds = [];
  let i = 0;
  for(l=1; l < value.length; l++) {
  	if (value[i] !== value[l]) {
  		odds.push(value[l]);
  	}
  }
  return odds;
}
let value = [1,1,2,1];

console.log(`value: ${value}`);
console.log(`odds: ${evenness(value)}`);

/* evenness end */

/* Cipher start */
// Cipher ROT13 Algorithm

/*
	Create a function that takes a string
	and returns the string with each letter substituted with the 13th letter after it in the alphabet (ROT13).
	If there are numbers or special characters included in the string, they should be returned as they are.
 */

// ref: https://hellodevworld.com/365-days-of-coding/rot13-cipher-javascript-solution#:~:text=The%20Problem,be%20returned%20as%20they%20are.

//soln 1 try

function  cipherRotSolnOne(str) {
	const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}

console.log('soln 1: for msg: Hello! welcome back ajana');
console.log(cipherRotSolnOne('Hello! welcome back ajana'));

// soln 2 try

function  cipherRotSolnTwo(str) {
	const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}

console.log('soln 2: for msg: Hello! welcome back ajana');
console.log(cipherRotSolnTwo('Hello! welcome back ajana'));

// soln 3 try

function cipherRotSolnThree(str) {
    return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
} 

console.log('soln 3: for msg: Hello! welcome back ajana');
console.log(cipherRotSolnThree('Hello! welcome back ajana'));

/* Cipher end */

/*  Pig It start */

/* Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
Leave punctuation marks untouched. */

const pigItFn = (str) => {
	let splWord = str.split(' ');
  return splWord.map(
  	(item) => {
    	return (
      	item.match(/[A-z]/i)
    		? `${item.substr(1)}${item.substr(0, 1)}ay`
     		: item)
    }).join(' ');
}

function pigIt(str) {
  const arr = str.split(' ')
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word
    })
    .join(' ')
}
const checkTxt = 'test tutorial!';
console.log(checkTxt);
console.log(pigItFn(checkTxt));
console.log('new fn:')
console.log(pigIt(checkTxt))

/*  Pig It end */

/* Panagram start */

/* 
  Pangram(contains all letters in alphabet) - 
  A pangram is a sentence that contains every single letter of the alphabet at least once.
  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const panagramFn = (str) => {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let alphatArr = alphabets.split('').map((item) => {
    return {
        str: item, 
        isPresent: str.includes(item)
    }
});
return alphatArr.every((item) => item.isPresent);
}

let chekstr = 'The quick brown fox jumps over the lazy dog';
console.log('find panagram str for:', chekstr)
console.log('Is panagram or not', panagramFn(chekstr))

/* Panagram end */

