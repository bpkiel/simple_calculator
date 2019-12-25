//Requirements
// 1.  DONE When a number is clicked:
//          a. DONE  display number in screen until a non-number button is clicked
// 2.  When an operator is clicked:
//          a.  DONE If no number on screen, do nothing
//          b.  If already saved first number, do nothing
//          c.  DONE If a number is on screen and haven't already saved first number, save first number:
// 3.   When second number is clicked:
//          a.  Save operator to [something]
//          b.  Display number in screen until a non-number button is clicked
// 4.   When equal is clicked, run a function that performs the operation on the two numbers
//          a.  Save second number
//          b.  Run a function that performs the operation on the two numbers
//          c.  Return result to the screen
// 5.   DONE If backspace is clicked, remove the last button value from the screen
// 6.   DONE If "C" is clicked:
//          a.  DONE reset the screen to 0
//          b.  DONE remove previously set number 1 and operator, if applicable
// 7.   Misc.
//          a.  If the result to be returned to the screen isn't a number, return "error" to screen
//          b.  DONE  Cap length of number inputs at length of screen
//          c.  Cap final result at length of screen
//          d.  DONE  If there are no numbers in the screen, should always have a 0 as default

//NEXT STEPS:

//  1. Need need to set up equals button:
//      a.  Equals saves second number
//      b.  Need to create function for each operator, which run when checked against the operator value stored
//      c.  Need to return answer to the screen
//          i. Unless NaN then return "error"
//          ii. Or number is too big, in which case need to round to 8 digits

let screen = document.getElementById('screen');

let operatorValue;

let firstNumFinal;

let secondNumFinal;

//Section to handle number buttons

let numBtn = document.getElementsByClassName('num-button');

for (let btns of numBtn) {
    btns.addEventListener('click', firstNum);
}

//section to handle operator buttons and save first number

let operatorBtn = document.getElementsByClassName('opBtn');

for (let btns of operatorBtn) {
    btns.addEventListener('click', saveOperator)
}

function saveOperator(e) {
    operatorValue = e.target.innerHTML;
    if (firstNumber.length > 0) {
        firstNumFinal = firstNumber.join('');
    } else {
        firstNumFinal = 0;
    }
    for (let btns of numBtn) {
    btns.addEventListener('click', secondNum);
}
    for (let btns of operatorBtn) {
        btns.removeEventListener('click', saveOperator);
    }
    for (let btns of numBtn) {
        btns.removeEventListener('click', firstNum);
    }
            console.log(firstNumFinal);
            console.log(operatorValue);
}

//Section to handle numbers

let firstNumber = [];

let secondNumber = [];

function firstNum(e) {
    if (firstNumber.length < 8) {
        firstNumber.push(e.target.innerHTML);
        screen.innerHTML = firstNumber.join('');
    }
}
function secondNum(e) {
    screen.innerHTML = 0;
    if (secondNumber.length < 8) {
        secondNumber.push(e.target.innerHTML);
        screen.innerHTML = secondNumber.join('');
    }
}

//  Section to handle backspace button

let backSpace = document.getElementById('backspace');

backSpace.addEventListener('click', removeOne)

function removeOne() {
    firstNumber.pop();
    if (firstNumber.length > 0) {
        screen.innerHTML = firstNumber.join('');
    } else {
        screen.innerHTML = 0;
    }
}

// Section to handle clear button

let clear = document.getElementById('clear');

clear.addEventListener('click', clearAll);

function clearAll() {
    screen.innerHTML = 0;
    firstNumber = [];
}

//section to handle equals button

let equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', runCalc);

function runCalc() {
    if (secondNumber.length > 0) {
        secondNumFinal = secondNumber.join('');
    } else {
        secondNumFinal = 0;
    }
    console.log(secondNumFinal);

    if (operatorValue === 'x') {
        screen.innerHTML = firstNumFinal * secondNumFinal;
    } else {
        if (operatorValue === '/') {
            screen.innerHTML = firstNumFinal / secondNumFinal;
        } else {
            if (operatorValue === '-') {
                screen.innerHTML = firstNumFinal - secondNumFinal;
            } else {
                if (operatorValue === '+') {
                    screen.innerHTML = firstNumFinal + secondNumFinal;
                }
            }
        }
    }
