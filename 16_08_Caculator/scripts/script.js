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

/*
let firstValue = "";
let lastValue = "";
let operator ="";
let total = "";
*/
/*
$(document).ready(function() {
    $("btn").on("click", function(e) {
        let btn = e.target.innerHTML;
        if (btn >= "0" && btn <= "9") {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
});



function handleNumber(num) {
    if (firstValueum1 === "") {
        firstValue = num;
    } else {
        lastValue = num;
    }
    displayButton(num);
}
function handleOperator(oper) {
    operator = oper;
}

function displayButton(btn) {
    $(".display").text(btn);
}


function handleTotal() {
    switch (operator) {
        case '+':
            total = +firstValue + +lastValue;
            displayButton(total);
            break;
            
    }
    updateVariables();
}

function updateVariables() {
    firstValue = total;
    lastValue = '';
}
/*
function input(e) {
    const result = document.getElementById("result");
    const displayCurrent = "";
    const inputValue = e.target.innerText;
    displayCurrent += inputValue;
    result.textContent = displayCurrent;
}

/*
function finalResult(e)
/*
{
    const result = document.getElementById("result");
    let finalResult;
    const symbolEntered = e.target;
    const prev = parseFloat(this.symbolEntered.textContent)
    const current = parseFloat(this.symbolEntered.textContent)
    const operation = document.getElementsByClassName("btn operation").value;
//    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case "+":
            finalResult = prev + current
            break
        case "-":
            finalResult = prev - current
            break
        case "*":
            finalResult = prev * current
            break
        case "/":
            finalResult = prev / current
            break
            default:
            return
        }
    result.textContent = finalResult;
}


class calculator {
    constructor(firstValue, lastValue) {
      this.firstValue = firstValue
      this.lastValue = lastValue
      this.clear()
    }
}


/*
function calculate()  
    calculator.compute()
    calculator.updateDisplay()




/*
function selectedOperation (operation) {
    let finalResult;
    let prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
            computation = prev + current
                break
            case '-':
            finalResult = prev - current
                break
            case '*':
            finalResult = prev * current
                break
            case '÷':
            finalResult = prev / current
                break
//            default:
//            return
    }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''


/*
let buttons = document.querySelectorAll("btn");
let result = document.getElementById("result");
buttons.forEach((button) => 
    button.addEventListener("click", function() {
    result.value = button.value;}));

*/




/*Array.from(buttons).forEach(function (button){
    button.addEventListener("click", function () {
        console.log(this.value);
      })})
  
      const
      display = document.querySelector(".text"),
      buttons = document.querySelectorAll(".btn");
  
  buttons.forEach(button => button.addEventListener("click", function() {
      display.value = button.value;
  }));


}





/*function onLoad(){
    alert("loaded");
    }
    */
/*
function more(){
    const allButtons=document.getElementsByClassName("btn").value;
    Object.values
allButtons.forEach (button => {
    button.addEventListener("click", function(){
    alert(button.innerText)});
    })
}

*/

/*
document.onclick = function more(){
    value1 = document.getElementById("num1").value;
    value2 = document.getElementById("num2").value;
result = Number(value1) + Number(value2);
alert(result);
}
*/
/*

function more(){
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const num3=document.getElementById("num3");
const result;

function more(){
    const num=document.getElementsByClassName("btn");
    alert(num.value);
    }
 */  

/*
button.addEventListener("click", print.value);
}
*/
/*
button = document.querySelectorAll("btn").value;
alert (button);
/*
document.addEventListener('click', function (){
    const button = document.querySelectorAll("btn").value;
    alert (button);
})
*/
/*
// const butonAll = document.querySelector(".btn");
// keys.addEventListener("click", event => {
//console.log("hello");
// )} */