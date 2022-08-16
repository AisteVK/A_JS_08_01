function addition(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    if (!Number(num1) || !Number(num2)){
        result.innerText = "Number not provided";}
    else {
        let resultSum = Number(num1) + Number(num2) 
        result.innerText = resultSum;}
}

function subtraction(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    if (!Number(num1) || !Number(num2)){
        result.innerText = "Number not provided";}
    else {
        let resultMinus = Number(num1) - Number(num2);
        result.innerText = resultMinus;}
}

function multiplication(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    if (!Number(num1) || !Number(num2)){
        result.innerText ="Number not provided";}
    else {
        let resultMulti = Number(num1) * Number(num2);
        result.innerText = resultMulti;}
}

function division(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    if (!Number(num1) || !Number(num2)){
        result.innerText = "Number not provided";}
    else {
        let resultDiv = Number(num1) / Number(num2);
        result.innerText = resultDiv;
        }
    
}

function clearInputs(){
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}