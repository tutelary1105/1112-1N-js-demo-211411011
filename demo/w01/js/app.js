const userInput = document.querySelector('#input-number');
const addBtn = document.querySelector('#btn-add')
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply')
const divideBtn = document.querySelector('#btn-divide');

const currentCalculationOutput = document.querySelector('#current-calculation')
const currentResultOutput = document.querySelector('#current-result');

// console.log('userInput', userInput);
// console.log('addBtn', addBtn);
// console.log('subtractBtn', subtractBtn);
// console.log('multiplyBtn', multiplyBtn);
// console.log('divideBtn', divideBtn);

// console.log('currentCalculationOutput', currentCalculationOutput);
// console.log('currentResultOutput', currentResultOutput);

// const buttons = document.querySelectorAll('button');
// console.log('buttons', buttons);

const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput() {
    return parseInt(userInput.value);
}

function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

// operand1 operator operand2 0 + 5
function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}`, );
    const calcText = `${operand1} + ${operand2}`;
    outputResult(currentResult, calcText);
}

addBtn.addEventListener('click',add);

// operand1 operator operand2 0 - 5
function subtract() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}`, );
    const calcText = `${operand1} - ${operand2}`;
    outputResult(currentResult, calcText);
}

subtractBtn.addEventListener('click',subtract);

// operand1 operator operand2 0 * 5
function multiply() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}`, );
    const calcText = `${operand1} * ${operand2}`;
    outputResult(currentResult, calcText);
}

multiplyBtn.addEventListener('click',multiply);

// operand1 operator operand2 0 / 5
function divide() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}`, );
    const calcText = `${operand1} / ${operand2}`;
    outputResult(currentResult, calcText);
}

divideBtn.addEventListener('click',divide);