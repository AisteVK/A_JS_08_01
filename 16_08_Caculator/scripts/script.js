function clearAll(){
    let display = document.getElementById("result");
    displayCurrent = "";
    display.textContent = displayCurrent;
}

function displaySymbol(e){
	let display = document.getElementById("result");
	let symbolEntered = e.target.textContent;
	displayCurrent += symbolEntered;
    display.textContent = displayCurrent;
    
}

const display = document.getElementById("result");
let displayCurrent = "";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

num1.addEventListener("click", displaySymbol);
num2.addEventListener("click", displaySymbol);
num3.addEventListener("click", displaySymbol);
num4.addEventListener("click", displaySymbol);
num5.addEventListener("click", displaySymbol);
num6.addEventListener("click", displaySymbol);
num7.addEventListener("click", displaySymbol);
num8.addEventListener("click", displaySymbol);
num9.addEventListener("click", displaySymbol);
num0.addEventListener("click", displaySymbol);

const allNumbers = document.querySelectorAll("button.number");
const allOperations = document.querySelectorAll("button.operation");

//    allOperations.addEventListener("click", displaySymbol);

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const decimal = document.getElementById("decimal");

const equals = document.getElementById("equals");
const del = document.getElementById("del");


add.addEventListener("click", displaySymbol);
subtract.addEventListener("click", displaySymbol);
multiply.addEventListener("click", displaySymbol);
divide.addEventListener("click", displaySymbol);

decimal.addEventListener("click", displaySymbol);

equals.addEventListener("click", calculate);
del.addEventListener("click", deleteOne);


// functions

function calculate() {
    display.textContent = eval(displayCurrent);
    displayCurrent = eval(displayCurrent).toString();
}

function deleteOne() {
    let display = document.getElementById("result");
    //let displayCurrent = document.getElementById("result").textContent;
    //displayCurrent = displayCurrent.substring(0, displayCurrent.length -1);
    display.textContent = "push C and be accurate";
}

/* comes back

function deleteOne() {
    let display = document.getElementById("result");
    let displayCurrent = document.getElementById("result").textContent;
    displayCurrent = displayCurrent.substring(0, displayCurrent.length -1);
    display.textContent = displayCurrent;
}
*/