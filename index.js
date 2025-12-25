function appendToDisplay(values){
    document.getElementById("display").value += values;
}

function clearDisplay(){
    document.getElementById("display").value = '';
}

function calculate(value){
    try{
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error){
        document.getElementById("display").value = 'Error'
    }
}
