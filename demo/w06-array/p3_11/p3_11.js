const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c')
const fBtn = document.querySelector('#btn-f');

const currentCalculationOutput = document.querySelector('#current-calculation')


const defaultResult = 32;
let currentResult = defaultResult;


function getUserInput() {
    return parseFloat(userInput.value);
}

function outputResult(text){
    currentCalculationOutput.textContent = text;
}

function c() {
    const operand1 = currentResult;
    const operand2 = getUserInput().toFixed(2);
    currentResult = (operand2*9/5 + operand1).toFixed(2);
    console.log(`${operand2} C = ${currentResult} F`, );
    outputResult(`${operand2} C = ${currentResult} F`,);
}

cBtn.addEventListener('click',c);


function f() {
    const operand1 = currentResult;
    const operand2 = getUserInput().toFixed(2);
    currentResult = ((5/9)*(operand2 - operand1)).toFixed(2);
    console.log(`${operand2} F = ${currentResult} C`, );
    outputResult(`${operand2} F = ${currentResult} C`,);
}

fBtn.addEventListener('click',f);