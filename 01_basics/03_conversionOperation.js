//*******Conversions***********
let score = "saurav"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN 
// true => 1; false => 0

let isLoggedIn = "saurav"

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "saurav" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//**********Operations*************

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(3**3);
// console.log(3%3);

let str1 = "hello"
let str2 = " saurav"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// Postfix increment
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n, y is 3n

// Prefix increment
let x1 = 3;
const y1 = ++x1;
// x1 is 4; y1 is 4

let x3 = 3n;
const y3 = ++x3;
// x3 is 4n; y3 is 4n
console.table([x,y,x2,y2,x1,y1,x3,y3]); 

