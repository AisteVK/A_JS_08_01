let month = prompt("Enter number of a month: ");
let day = prompt("Enter day: ");

let notNumbers = isNaN(month) || isNaN(day);
let result

if(notNumbers){
    result = "Month or day are not provided in numbers";}
    
else if (month == 2 && day >29){
    result = "Day of February is not accurate";}

else if (month <1 || month >12 || day <1 || day >31){
    result = "Month or day are not accurate";}

else if((month == 4 || month == 6 || month == 9 || month == 11) && day > 30){
    result = "Day is not accurate";}
  
else if ((month == 1 && day >= 21) || (month == 2 && day <=19)){
    result = "Aquarius";}

else if ((month == 2 && day >= 20) || (month == 3 && day <=20)){
    result = "Pisces";}

else if ((month == 3 && day >= 21) || (month == 4 && day <=20)){
    result = "Aries";}

else if ((month == 4 && day >= 21) || (month == 5 && day <=21)){
    result = "Taurus";}

else if ((month == 5 && day >= 22) || (month == 6 && day <=21)){
        result = "Geminy";}

else if ((month == 6 && day >= 22) || (month == 7 && day <=22)){
        result = "Cancer";}

else if ((month == 7 && day >= 23) || (month == 8 && day <=22)){
        result = "Leo";}

else if ((month == 8 && day >= 23) || (month == 9 && day <=23)){
        result = "Virgo";}

else if ((month == 9 && day >= 24) || (month == 10 && day <=23)){
        result = "Libra";}

else if ((month == 10 && day >= 24) || (month == 11 && day <=21)){
        result = "Scorpio";}

else if ((month == 11 && day >= 22) || (month == 12 && day <=22)){
        result = "Sagittarius";}

else if ((month == 12 && day >= 23) || (month == 1 && day <=20)){
    result = "Capricorn";}
    
alert(result)