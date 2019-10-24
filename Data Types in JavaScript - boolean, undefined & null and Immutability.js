// OR Operator (expr1 || expr2) 

// true  || true       // => true
// true  || false      // => true
// false || true       // => true
// false || false      // => false
// false || (4 > 2)    // true

/////////////////////////////////////////////////////////////////////////////////////////////

// AND Operator (expr1 && expr2)

// true  && true       // => true
// true  && false      // => false
// false && true       // => false
// false && false      // => false
// true  && (4 > 2)    // => true

/////////////////////////////////////////////////////////////////////////////////////////////

// A short-circuit evaluation

// false && (anything) is a short-circuit evaluated to false.
// true || (anything) is a short-circuit evaluated to true.

/////////////////////////////////////////////////////////////////////////////////////////////

// NOT Operator (!)

// !expr1

// !true 		// => false
// !false 		// => true
// !(4 > 2) 	// => false

/////////////////////////////////////////////////////////////////////////////////////////////

// undefined is primitive value automatically assigned to variables when they are declared.

// let name;
// console.log(name); // <== undefined

// In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent address, meaning the variable that hasn’t been even declared yet.

// let name = null;
// console.log(name); // <== null