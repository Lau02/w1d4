// function <name> ([<argument_list>]) {
//     <instructions>

//     [return <expression>;]
// }

/// //////////////////////////////////////////////////////////////////////////////////////////</expression>

// // Function Declaration
// function sayHelloWorld () {
//   const whatToSay = 'Hello, World!'
//   console.log(whatToSay)
// }

// // Function Invocation
// sayHelloWorld(); // => Hello, World!
// sayHelloWorld(); // => Hello, World!
// sayHelloWorld(); // => Hello, World!

/// ///////////////////////////////////////////////////////////////////////////////////////

// function sayHelloMery () {
//   console.log('Hello, Mery!')
// }
// function sayHelloJohn () {
//   console.log('Hello, John!')
// }
// function sayHelloLucy () {
//   console.log('Hello, Lucy!')
// }

// sayHelloMery()
// // function will print: "Hello Mery!"
// sayHelloJohn()
// // function will print: "Hello John!"
// sayHelloLucy()
// // function will print: "Hello Lucy!"

// function sayHello (name) {
//   console.log(`Hello ${name}!`)
// }

// sayHello('Mery')
// // name = Mery
// // function will alert: "Hello Mery!"

// sayHello('John')
// // name = John
// // function will alert: "Hello John!"

// sayHello('Lucy')
// // name = Lucy
// // function will alert: "Hello Lucy!"

/// ///////////////////////////////////////////////////////////////////////////////////////

// function sayHelloManyTimes(name, howManyTimes) {
//   for (let i=0; i < howManyTimes; i++) {
//     console.log(`Hello ${name}!`);
//   }
// }

// sayHelloManyTimes('Michael', 2);
// // => Hello Michael!
// // => Hello Michael!

// sayHelloManyTimes(3, 'ERROR');
// // Will this work?

// sayHelloManyTimes(2);
// // Will this work?

// sayHelloManyTimes('ironBrain');
// // Will this work?

/// ////////////////////////////////////////////////////////////////////////////////////

// function eatDinner () {
//   console.log('Eating the dinner 🍽')
// }

// function eatDessert () {
//   console.log('Eating the dessert 🍰')
// }

// eatDinner() // <== Eating the dinner 🍽
// eatDessert() // <== Eating the dessert 🍰

/// ////////////////////////////////////////////////////////////////////////////////////

// function eatDinner(){
//     setTimeout(function(){
//       console.log("Eating the dinner 🍽");
//     }, 1000)
//   }

//   function eatDessert(){
//     console.log("Eating the dessert 🍰");
//   }

//   eatDinner();
//   eatDessert();

//   // the console:
//   // Eating the dessert 🍰
//   // Eating the dinner 🍽

/// /////////////////////////////////////////////////////////////////////////////////

// function eatDinner (callback) {
//   console.log('Eating the dinner 🍽')
//   callback()
// }

// function eatDessert () {
//   console.log('Eating the dessert 🍰')
// }

// eatDinner(eatDessert) // <== notice that there's NO () when passing a function as argument here

// // Eating the dinner 🍽
// // Eating the dessert 🍰

/// /////////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice (price, taxPercent) {
//   if (typeof price !== 'number' || typeof taxPercent !== 'number') {
//     return `You have to pass number values!`
//   }
//   const theTaxPart = (price * taxPercent) / 100
//   return `${price + theTaxPart} €`
// }

// calculateTotalPrice(5, 7) // <== 5.35 €
