
import {resetButtonsAfterCalc, resetButtonsAfterOperator, resetButtonsAfterClear} from './resets.js';

let screen = document.getElementById('js-screen');
let numBtn = document.getElementsByClassName('js-num-button');
let operatorBtn = document.getElementsByClassName('js-operator-btn');
let backSpace = document.getElementById('js-backspace-btn');
let clear = document.getElementById('js-clear-btn');
let equalsButton = document.getElementById('js-equals-btn');
let firstNumFinal = '';
let operatorValue = '';
let operatorColor = '';

backSpace.addEventListener('click', backspace);
clear.addEventListener('click', clearAll);
equalsButton.addEventListener('click', runCalc);
for (let btns of numBtn) {
    btns.addEventListener('click', firstNum);
}
for (let btns of operatorBtn) {
    btns.addEventListener('click', saveOperator)
}

let firstNumberArray = [];
let secondNumberArray = [];

function firstNum(e) {
    if (firstNumberArray.length < 8) {
        firstNumberArray.push(e.target.innerHTML);
        screen.innerHTML = firstNumberArray.join('');
    }
}

function secondNum(e) {
    screen.innerHTML = 0;
    if (secondNumberArray.length < 8) {
        secondNumberArray.push(e.target.innerHTML);
        screen.innerHTML = secondNumberArray.join('');
    }
}

function saveOperator(e) {
    if (secondNumberArray.length > 0) {
        alert('This is only a simple calculator.  Two numbers per calculation, please!')
    } else {
        operatorValue = e.target.innerHTML;
    }
    if (firstNumberArray.length > 0) {
        firstNumFinal = parseInt(firstNumberArray.join(''));
    } else {
        firstNumFinal = 0;
    }
    operatorColor = e.target.style.backgroundColor = 'darkOrange';
    resetButtonsAfterOperator();
}

function backspace() {
    firstNumberArray.pop();
    if (firstNumberArray.length > 0) {
        screen.innerHTML = firstNumberArray.join('');
    } else {
        screen.innerHTML = 0;
    }
}

function clearAll() {
    screen.innerHTML = 0;
    firstNumberArray = [];
    secondNumberArray = [];
    firstNumFinal = '';
    resetButtonsAfterClear()
}

function runCalc() {

    let finalValue;
    let secondNumFinal;

    if (secondNumberArray.length > 0) {
        secondNumFinal = parseInt(secondNumberArray.join(''));
    } else {
        secondNumFinal = 0;
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
    screen.innerHTML = finalValue;
    firstNumberArray = finalValue.toString().split('');
    secondNumberArray = [];
    secondNumFinal = '';
    resetButtonsAfterCalc();
}

// function resetButtonsAfterClear() {
//     for (let btns of numBtn) {
//         btns.addEventListener('click', firstNum);
//     }
//     for (let btns of numBtn) {
//         btns.removeEventListener('click', secondNum);
//     }
//     for (let btns of operatorBtn) {
//         btns.addEventListener('click', saveOperator);
//         btns.style.backgroundColor = 'orange';
//     }
// }
//
// function resetButtonsAfterOperator() {
//      for (let btns of numBtn) {
//         btns.removeEventListener('click', firstNum);
//      }
//      for (let btns of numBtn) {
//          btns.addEventListener('click', secondNum);
//      }
// }
//
// function resetButtonsAfterCalc() {
//     for (let btns of numBtn) {
//         btns.removeEventListener('click', firstNum);
//     }
//     for (let btns of numBtn) {
//         btns.addEventListener('click', secondNum);
//     }
//     for (let btns of operatorBtn) {
//         btns.addEventListener('click', saveOperator);
//         btns.style.backgroundColor = 'orange';
//     }
// }

