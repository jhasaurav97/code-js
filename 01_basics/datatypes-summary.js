// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// References (Non primitives)

// Objects, Function, Array

const heros = ["Ironman", "Hulk", "CaptainAmerica"]
let myObj = {
    name: 'saurav',
    age: 24,
}
console.log(myObj.name);
console.log(heros[0]);

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);