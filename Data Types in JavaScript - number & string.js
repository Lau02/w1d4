// const age = 34;
// const price = 12.99;

/////////////////////////////////////////////////////////////////////////////////////////////

// const name = "Sandra"; // <== string data type
// const whatIsThis = name/2;

// console.log(whatIsThis); // ==> NaN

// console.log(2**5);
// 2 * 2 * 2 * 2 * 2
// => 32

/*
Precedence	Operator	Name
1			()			Parantheses
2			**			Exponents
3			*			Multiplication
4			/			Division
5			+			Addition
6			-			Subtraction
*/

// const i = 10 + 5 * 2 ** 3 / 4 - 6
//  === 10 + 5 * 8 / 4 - 6 <== start with the exponents (2 ** 3)
//  === 10 + 40 / 4 - 6 <== then multiplication (5 * 8)
//  === 10 + 10 - 6 <== then division (40 / 4)
//  === 20 - 6 <== then addition (10 + 10 )
//  ==> 14 <== and finally finish with subtraction (20 - 6)


////////////////////////////////////////////////////////////////////////////////////////////////

// let name = "Ana";
// console.log(`Hello there, ${name}!`);
// // ==> Hello there, Ana!

////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(`${name} walks every day at least ${1+2} km `);
// ==> Ana walks every day at least 3km 

////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = `
// 1. banana 
// 2. apple 
// 3. orange 
// 4. cherry 
// `;

// console.log(fruits); 
// 1. banana ,
// 2. apple ,
// 3. orange ,
// 4. cherry 

////////////////////////////////////////////////////////////////////////////////////////////////

// const favBook = "My favorite book is "Anna Karenina".";
// console.log(favBook); // <== error: Unexpected token

// const favBook = "My favorite book is 'Anna Karenina'.";
// console.log(favBook); // <== My favorite book is 'Anna Karenina'.

// const favBook = "My favorite book is \"Anna Karenina\".";
// console.log(favBook); // <== My favorite book is "Anna Karenina".

////////////////////////////////////////////////////////////////////////////////////////////////

// const mood = 'I\'m OK.';
// console.log(mood); // <== I'm OK.

////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = " 1. banana \n 2. apple \n 3. orange \n 4. cherry ";

// console.log(fruits); 
// // 1. banana ,
// // 2. apple ,
// // 3. orange ,
// // 4. cherry 

////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Web Dev \nUX/UI");
// console.log(`Web Dev
// UX/UI`);

// both consoles are the same:
// Web Dev 
// UX/UI

////////////////////////////////////////////////////////////////////////////////////////////////

// const name = "Ana";
// console.log(name.length); // <== 3

/////////////////////////////////////////////////////////////////////////////////////////////

// charAt(n) shows the character on the nth position in the string but keep in mind, the first character is indexed with zero (0).

// const greeting = "Hello there!";
// console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`); 
// // "Hello there!" is a string and it's length is 12.
// console.log(greeting.charAt(0)); // <== H
// console.log(greeting.charAt(1)) // <== e
// console.log(greeting.charAt(5)); // <== " "
// console.log(greeting.charAt(11)); // <== !
// console.log(greeting.charAt(12)); // <== "" as an empty string

// const greeting = "Hello there!";
// console.log(greeting[0]); // <== H
// console.log(greeting[3]); // <== l
// console.log(greeting[9]); // <== r
// console.log(greeting[-2]); // undefined

/////////////////////////////////////////////////////////////////////////////////////////////

// const message = "Don't be sad, be happy!";
// console.log(message.indexOf("Don't")); // <== 0
// console.log(message.indexOf("t")); // <== 4
// console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
// console.log(message.indexOf("py")); // 20

/////////////////////////////////////////////////////////////////////////////////////////////

// Sorting the strings - .toLocaleCompare()
// According to MDN, the .localeCompare() method returns a number indicating whether a string comes before or after or is the same as some other string in sort order.
// How this method works?

// console.log('barcelona'.localeCompare('miami') ); // -1
// console.log('miami'.localeCompare('barcelona') ); // 1
// console.log('Miami'.localeCompare('miami') ); // 1