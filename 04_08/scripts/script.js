const newArr = [];

for (let i = 0; i <= 5; i++) {
    num = prompt ("Enter a number:");
    if (isNaN(num)){
        continue;}
    else {
    newArr.push(Number(num));}
}

newArr.sort()
alert(newArr);

//Print out elements which are negative. 
const negativeArr = [];
for (let i = 0; i < newArr.length; i++)
    if (newArr[i] <0){
        negativeArr.push(newArr[i]);}
    else{
        continue;
    }
    
alert("Negative numbers: " + negativeArr);


//Print out elements which are odd (uneven). 
const oddArr = [];
for (let i = 0; i < newArr.length; i++)
    if (newArr[i] %2 !== 0){
        oddArr.push(newArr[i]);}
    else{
        continue;
    }
    
alert("Odd numbers: " + oddArr);

//Compute how many elements are odd (uneven).
alert("Number of odd elements: " + oddArr.length); 
 

//Verify if there are multiple elements with the same value
let result = "undefined";
for (let i = 0; i < newArr.length; i++){
    for (let j = 0; j < newArr.length; j++){
        if(i !== j){
            if (newArr[i] === newArr[j]){
                result = "found";
                break;}
            else{
                continue;}
        }
        else{
            continue;}
    }
    if(result == "found"){ 
       break;}
    else{
        continue;}
}

if(result == "found"){   
    alert("There are elements with the same value");}
else if(result == "undefined"){
    alert("There are no elements with the same value");}



//Print out each second element.
const secondArr = [];
for (let i = 0; i < newArr.length; i += 2){
    secondArr.push(newArr[i]);}
        
alert("Each second element: " + secondArr);

// Compute average value of the array
let sum = 0
for (let i = 0; i < newArr.length; i++){
    sum += newArr[i];}

let count = newArr.length
let average = sum / count
alert("Average is: " + average);


//Establish how many elements are smaller than average value.
const smallerArr = [];
for (let i = 0; i < newArr.length; i++)
    if(newArr[i] < average){
       smallerArr.push(newArr[i]);}
    else{
        continue;
    }
    
alert("Elements smaller than average value: " + smallerArr.length);

