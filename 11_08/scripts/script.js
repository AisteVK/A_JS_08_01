function highlightEntry(){
    let value = $("#colorOperation").val();
    if(value == "Select"){
        $(".col1").show();
    }else{
        $(".col1").hide();
        $(".col2").hide();
    }
    }

function highlightEntry2(){
    let value2 = $("#countryOperation").val();
       if(value2 == "Select"){
            $(".col1").show();
            $(".col2").show();
        }else{
            $(".col1").hide();
            $(".col2").hide();
        }
}    

function addColor(){
    const container = document.getElementsByClassName("container")[0];
    const element1 = document.createElement("div");
    const input1 = document.getElementById("input1").value;
    element1.textContent = input1;
    container.appendChild(element1);
}


function addCountry(){
    const container = document.getElementsByClassName("container")[0];
    const element2 = document.createElement("div");
    const input2 = document.getElementById("input2").value;
    element2.textContent = input2;
    container.appendChild(element2);
}


// ... notepad