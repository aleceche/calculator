//variables
let x;
let y;
let operator;
let result;
const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const operators = ['*','/','+','-','Enter']

//selectors
const screen = document.querySelector('.screen');
const clearButton = document.querySelector('.clear-button');
const numButtons = [...document.querySelectorAll('.num-button')];
const operatorButtons = [...document.querySelectorAll('.operator-button')];


//event listeners
clearButton.addEventListener('click', clearScreen);
numButtons.forEach(numButton => numButton.addEventListener('click', guiEvent));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', guiEvent));
window.addEventListener('keydown', keyboardEvent);


//functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(func, x, y) {
    return func(x, y);
}

function clearScreen() {
    x = null;
    y = null;
    result = null;
    operator = null;
    screen.textContent = '';
}

function keyboardEvent(e) {
    const val = e.key;
    if (numbers.includes(val) || operators.includes(val)) {
        updateScreen(val);
    } else {
        e.preventDefault();
    }
}

function guiEvent() {
    updateScreen(this.textContent);
}

//need to add functionality for continuous operation
//need to make sure you can't hit enter without a full expression
//need to make sure you can't add multiple decimal points in a single variable

function updateScreen(string) {
    switch(string) {
        case 'Enter':
        case '=':
            expression = screen.textContent;
            if (expression.includes('.')) {
                y = parseFloat(expression.slice(expression.indexOf(operator.symbol)+1));
            } else {
                y = parseInt(expression.slice(expression.indexOf(operator.symbol)+1));
            }
            result = operate(operator.func, x, y);
            if (result % 1 === 0) {
                screen.textContent = result;
            } else {
                screen.textContent = result.toFixed(2);
            }
            x = result;
            return;
        case '*':
            operator = {'symbol': string, 'func': multiply};
            x = parseInt(screen.textContent);
            break;
        case '/':
            operator = {'symbol': string, 'func': divide};
            x = parseInt(screen.textContent);
            break;
        case '+':
            operator = {'symbol': string, 'func': add};
            x = parseInt(screen.textContent);
            break;
        case '-':
            operator = {'symbol': string, 'func': subtract};
            x = parseInt(screen.textContent);
            break;
    }
    screen.textContent += string;
}