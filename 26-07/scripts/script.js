let num1 = prompt("Enter a number:");
let num2 = prompt("Enter a second number:");

let resultSum = Number.parseInt(num1)+Number.parseInt(num2);
let resultMinus = num1-num2;
let resultMulti = num1*num2;
let resultDiv = num1/num2;

alert("The result of addition: " + resultSum);
alert("The result of subtraction: " + resultMinus);
alert("The result of multiplication: " + resultMulti);
alert("The result of division: " + resultDiv);

let firstName = prompt("Enter Name:");
let lastName = prompt("Enter Last name:");

let resultNames = firstName + lastName;
alert("Hello: " + firstName + " " + lastName);