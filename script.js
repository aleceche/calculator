//variables
let x;
let y;
let operator;
let result;

//selectors
const screen = document.querySelector('.screen');
const clearButton = document.querySelector('.clear-button');
const numButtons = [...document.querySelectorAll('.num-button')];
const operatorButtons = [...document.querySelectorAll('.operator-button')];


//event listeners
//clearButton.addEventListener('click', clearScreen);
numButtons.forEach(numButton => numButton.addEventListener('click', addToScreen));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', addOperation));


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
    screen.textContent = '';

}

function addToScreen() {
    screen.textContent += this.textContent;
}

function addOperation() {
    if (this.textContent === '=') {
        y = Number(screen.textContent);
        result = operate(operator, x, y);
        screen.textContent = result;
    } else {
        x = Number(screen.textContent);
        switch(this.textContent) {
            case '+':
                operator = add;
                break;
            case '-':
                operator = subtract;
                break;
            case '*':
                operator = multiply;
                break;
            case '/':
                operator = divide;
                break;
        }
        screen.textContent = '';
    }
}