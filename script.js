

// Let's go get access to the buttons (and the screen) we need:

let screen = document.getElementById('screen');
let numBtn = document.getElementsByClassName('num-button');
let operatorBtn = document.getElementsByClassName('operator-btn');
let backSpace = document.getElementById('backspace-btn');
let clear = document.getElementById('clear-btn');
let equalsButton = document.getElementById('equals-btn');

// Set up initial event listeners:

for (let btns of numBtn) {
    btns.addEventListener('click', firstNum);
}
for (let btns of operatorBtn) {
    btns.addEventListener('click', saveOperator)
}
backSpace.addEventListener('click', backspace);
clear.addEventListener('click', clearAll);
equalsButton.addEventListener('click', runCalc);

// Functions to save first and second numbers to arrays:

let firstNumberArray = [];

let secondNumberArray = [];

function firstNum(e) {
    if (firstNumberArray.length < 8) {
        firstNumberArray.push(e.target.innerHTML);
        screen.innerHTML = firstNumberArray.join('');
        console.log('FirstArray:',firstNumberArray);
    }
}

function secondNum(e) {
    screen.innerHTML = 0;
    if (secondNumberArray.length < 8) {
        secondNumberArray.push(e.target.innerHTML);
        screen.innerHTML = secondNumberArray.join('');
        console.log('SecondArray:',secondNumberArray);
    }
}

//  Function to save operator, turn first array into number, and set functions to receive second number:

function saveOperator(e) {
    operatorValue = e.target.innerHTML;

    if (firstNumberArray.length > 0) {
        firstNumFinal = parseInt(firstNumberArray.join(''));
    } else {
        firstNumFinal = 0;
    }

    operatorColor = e.target.style.backgroundColor = 'darkOrange';

     for (let btns of numBtn) {
        btns.removeEventListener('click', firstNum);
    }
     for (let btns of operatorBtn) {
        btns.removeEventListener('click', saveOperator);
    }
     for (let btns of numBtn) {
        btns.addEventListener('click', secondNum);
    }
}

//  Function to run backspace button:

function backspace() {
    firstNumberArray.pop();
    if (firstNumberArray.length > 0) {
        screen.innerHTML = firstNumberArray.join('');
    } else {
        screen.innerHTML = 0;
    }
}

// Function to run clear button:

function clearAll() {
    screen.innerHTML = 0;
    firstNumberArray = [];
    secondNumberArray = [];
    firstNumFinal = '';
    operatorValue = '';

    for (let btns of numBtn) {
        btns.addEventListener('click', firstNum);
    }
    for (let btns of numBtn) {
        btns.removeEventListener('click', secondNum);
    }
    for (let btns of operatorBtn) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
}

// Function for equals button to run equation on both numbers, display result, and set result as new first number:

let finalValue;
let secondNumFinal;

function runCalc() {

    if (secondNumberArray.length > 0) {
        secondNumFinal = parseInt(secondNumberArray.join(''));
    } else {
        secondNumFinal = 0;
    }

    for (let btns of operatorBtn) {
        btns.removeEventListener('click', saveOperator);
    }

    switch(operatorValue) {
        case 'x':
            finalValue = firstNumFinal * secondNumFinal;
            screen.innerHTML = finalValue;
            break;
        case '/':
            finalValue = firstNumFinal / secondNumFinal;
            screen.innerHTML = finalValue;
            break;
        case '-':
            finalValue = firstNumFinal - secondNumFinal;
            screen.innerHTML = finalValue;
            break;
        case '+':
            finalValue = parseInt(firstNumFinal) + parseInt(secondNumFinal);
            screen.innerHTML = finalValue;
            break;
    }

    firstNumberArray = finalValue.toString().split('');
    secondNumberArray = [];
    secondNumFinal = '';

    for (let btns of numBtn) {
        btns.removeEventListener('click', firstNum);
    }
    for (let btns of numBtn) {
        btns.addEventListener('click', secondNum);
    }
    for (let btns of operatorBtn) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
            }
