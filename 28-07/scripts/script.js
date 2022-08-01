let num1 = prompt("Enter a number:");
let num2 = prompt("Enter a second number:");
let operation = prompt("Choose an operation: +, -, *, /");

if (operation == "+"){
    if (!Number(num1) || !Number(num2)){
        let resultSum = num1 + num2;
        alert("The result of addition: " + resultSum);}
    else {
        let resultSum = Number(num1) + Number(num2) 
        alert("The result of addition: " + resultSum);}
}

else if (operation == "-"){
    if (!Number(num1) || !Number(num2)){
        alert("Number not provided");}
    else {
        let resultMinus = num1 - num2;
        alert("The result of subtraction: " + resultMinus);}
}

else if (operation == "*"){
    if (!Number(num1) || !Number(num2)){
        alert("Number not provided");}
    else {
        let resultMulti = num1*num2;
        alert("The result of multiplication: " + resultMulti);}
}

else if (operation == "/"){
    if (!Number(num1) || !Number(num2)){
        alert("Number not provided");}
    else {
        let resultDiv = num1 / num2;
        alert("The result of division: " + resultDiv)
        }
    }

else if (operation !== ("+" || "-" || "*" || "/")) {
    alert("Wrong operation input");
}