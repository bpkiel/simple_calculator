//Requirements
// 1.  When a number is clicked:
//          a. DONE  display number in screen until a non-number button is clicked
// 2.  When an operator is clicked:
//          a.  If no number on screen, do nothing
//          b.  If already saved first number, do nothing
//          b.  If a number is on screen and haven't already saved first number:
//                i.  Save number to [something]
// 3.   When second number is clicked:
//          a.  Save operator to [something]
//          b.  Display number in screen until a non-number button is clicked
// 4.   When equal is clicked, run a function that performs the operation on the two numbers
//          a.  Save second number
//          b.  Run a function that performs the operation on the two numbers
//          c.  Return result to the screen
// 5.   DONE If backspace is clicked, remove the last button value from the screen
// 6.   DONE If "C" is clicked:
//          a.  reset the screen to 0
//          b.  remove previously set number 1 and operator, if applicable
// 7.   Misc.
//          a.  If the result to be returned to the screen isn't a number, return "error" to screen
//          b.  DONE  Cap length of number inputs at length of screen
//          c.  Cap final result at length of screen
//          d.  DONE  If there are no numbers in the screen, should always have a 0 as default


let screen = document.getElementById('screen');

let operatorValue =

//Section to handle number buttons

let btn = document.getElementsByClassName('num-button');

for (let btns of btn) {
    btns.addEventListener('click', firstNum);
}

//Section to handle numbers

let firstNumber = [];

function firstNum(e) {
    if (firstNumber.length < 8) {
        firstNumber.push(e.target.innerHTML);
        screen.innerHTML = firstNumber.join('');
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