let currentInput = "";
let display = document.getElementById('display')

function appendToDisplay(value)
{
    currentInput += value;
    display.value = currentInput;
}

function  clearDisplay()
{
    currentInput = '';
    display.value = '';
}
// funcion para calcular el resultado de la expresion ingresada por el 
function calculateResult() {
    try {
        const result = eval(currentInput) // evalua el resultado de la expresion y guarda del resultado
        display.value = result;
        currentInput = result.toString();
    } catch (error){
        display.value = 'error';
    }

    
}
