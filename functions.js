// function <name> ([<argument_list>]) {
//     <instructions>

//     [return <expression>;]
// }

// function sum (s1, s2) {
//     return s1 + s2
// }
// let output = sum(50, 100)
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


// https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04

// function sum(s1, s2) {
//     return s1 + s2
// }

// sum(10, 100)



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

function eatDinner(){
    setTimeout(function(){
      console.log("Eating the dinner 🍽");
    }, 1000)
  }

  function eatDessert(){
    console.log("Eating the dessert 🍰");
  }

  eatDinner();
  eatDessert();

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

/// ///////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice (price, taxPercent) {
//   if (typeof price !== 'number' || typeof taxPercent !== 'number') {
//     return `You have to pass number values!`
//   }
//   const theTaxPart = (price * taxPercent) / 100
//   return `${price + theTaxPart} €`
// }

// calculateTotalPrice(5, 7) // <== 5.35 €

/// ///////////////////////////////////////////////////////////////////////////

// tight coupling
// function anotherFunction (text) {
//   console.log(`Hello ${text}!`)
// }

// function oneFunction (name) {
//   return anotherFunction(name)
// }

// oneFunction('Lluis')

// // Prints "Hello Lluis"

/// ///////////////////////////////////////////////////////////////////////////

// function gradeTheStudent () {
//     const grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

//     let randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
//     randomNumber = randomNumber * grades.length; // Random decimal [0.0 - 6.0)
//     randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

//     return grades[randomNumber];
//   }

//   const myGrade = gradeTheStudent();
//   console.log(myGrade);

/// ////////////////////////////////////////////////////////////////////////

// 💡 Anonymous functions also help us avoid naming things that don’t necessarily need a name.

// // anonymous
// setTimeout(function () {
//     console.log(
//       "This is just an example of anonymous function since this function really doesn't have a name."
//     )
//   }, 1000)

// // named
// function someFunctionName () {
//   console.log(
//     "This is just an example of anonymous function since this function really doesn't have a name."
//   )
// }

// setTimeout(someFunctionName, 1000)

/// /////////////////////////////////////////////////////////////////////

function doSomethingWithAFunction (name, functionToCall) {
  functionToCall(name)
}
// Anonymous Function
// doSomethingWithAFunction('Ironhacker', function (someParameter) {
//   console.log(`Hello ${someParameter}.`)
// })
// // => Hello Ironhacker.
// // Anonymous Function
// doSomethingWithAFunction('Ironhacker', function (someParameter) {
//   console.log(`Goodbye ${someParameter}.`)
// })
// // => Goodbye Ironhacker.

// // Anonymous Function
// doSomethingWithAFunction(2, function (someParameter) {
//   console.log(2 + someParameter)
// })
// // => 4

/// /////////////////////////////////////////////////////////////////////

// // scope
// function sayHello () {
//   let firstName = 'Ana' // <== local variable
//   console.log(`Hello ${firstName}!`)
// }

// sayHello() // <== Hello Ana!
// console.log(firstName) // <== ReferenceError: firstName is not defined

// // global scope

// const firstName = 'Ana' // <== global variable
// function sayHello () {
//   console.log(`Hello ${firstName}!`)
// }

// sayHello() // <== Hello Ana!
// console.log(firstName) // <== Ana

/// ////////////////////////////////////////////////////////////////

// let firstName = 'Ana' // <== global variable
// function sayHello () {
//   firstName = 'Martina'
//   console.log(`Hello ${firstName}!`)
// }

// console.log(`Before the function executes the first name is ${firstName}.`) // <== Before the function executes the first name is Ana.
// sayHello() // <== Hello Martina!
// console.log(`After the function executes the first name is ${firstName}.`) // <== After the function executes the first name is Martina.

/// /////////////////////////////////////////////////////////////

// variable shadowing

// let firstName = 'Ana' // <== global variable
// function sayHello () {
//   let firstName = 'Martina' // <== local variable with the same name as the global one
//   console.log(`Hello ${firstName}!`)
// }

// console.log(`Before the function executes the first name is ${firstName}.`) // <== Before the function executes the first name is Ana.
// sayHello() // <== Hello Martina!
// console.log(`After the function executes the first name is ${firstName}.`) // <== After the function executes the first name is Ana.

/// /////////////////////////////////////////////////////////////

// function declaration
// //     having parameters
// //     is optional
// //         |
// function someName (someParameters) {
//   // some code here
// }

// function expression
// let someName = function(){
//     // some code here
// }

// Function Expression is created in a moment when the execution reaches to that point in the code, and it can be used from that point on
// Function Declaration is created at the very beginning when the script starts the execution which means that this kind of functions can be used even before then they are created in the code

/// //////////////////////////////////////////////////////////

// Function Expression - no hoisting
// greeting("Ana"); // TypeError: greeting is not a function

// let greeting = function(name) {
//   console.log(`Hello, ${name}`);
// }

/// //////////////////////////////////////////////////////////

// Function Declaration - hoisting

// greeting('Ana') // Hello Ana

// function greeting (name) {
//   console.log(`Hello, ${name}`)
// }

/// ///////////////////////////////////////////////////////

// Arrow functions

// If the right side is only a one-line expression, we can omit the curly braces and return statement is omitted as well. However, if we need to write multiline statements in the function, then we can do it using the curly braces {...} and using mandatory return statement.

// let greeting = function (name) {
//   console.log(`Hello, ${name}`)
// }

// // arrow function:
// let greeting = name => {
//   return name
// }

// let greeting = name => name;
// greeting("Ana"); // <== Ana

// let greeting = () => console.log('Hello there!')

/// //////////////////////////////////////////////////

/*
Reuse code: We can call a function as many times as we need it in our code, but we only need to define how it works once :)

Abstraction is a technique that allows us to think at higher, more abstract levels.
Ie. if we know what Math.floor() does, we can use it happily in our code… we don’t have to worry about how math.floor() performs it’s magic. It’s abstracted from us

Separation of Concerns: Functions allow us to separate a big problem into many smaller ones.

Single Responsibility Principle: A function has to do just one thing, and the name of the function has to be very clear so you can identify what is doing just reading the name.
*/
