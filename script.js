

let screen = document.getElementById('screen');

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
    if (firstNumberArray.length > 0) {
        firstNumFinal = firstNumberArray.join('');
    } else {
        firstNumFinal = 0;
    }
    operatorColor = e.target.style.backgroundColor = 'black'

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

//Section to handle numbers

let firstNumberArray = [];

let secondNumberArray = [];

function firstNum(e) {
    if (firstNumberArray.length < 8) {
        firstNumberArray.push(e.target.innerHTML);
        screen.innerHTML = firstNumberArray.join('');
        console.log('first function');
        console.log('FirstArray:',firstNumberArray);
    }
}
function secondNum(e) {
    screen.innerHTML = 0;
    if (secondNumberArray.length < 8) {
        secondNumberArray.push(e.target.innerHTML);
        screen.innerHTML = secondNumberArray.join('');
        console.log('second function');
        console.log('SecondArray:',secondNumberArray);
    }
}

//  Section to handle backspace button

let backSpace = document.getElementById('backspace');

backSpace.addEventListener('click', removeOne)

function removeOne() {
    firstNumberArray.pop();
    if (firstNumberArray.length > 0) {
        screen.innerHTML = firstNumberArray.join('');
    } else {
        screen.innerHTML = 0;
    }
}

// Section to handle clear button

let clear = document.getElementById('clear');

clear.addEventListener('click', clearAll);

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

//section to handle equals button

let equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', runCalc);

let finalValue;

function runCalc() {

    if (secondNumberArray.length > 0) {
        secondNumFinal = secondNumberArray.join('');
    } else {
        secondNumFinal = 0;
    }

    for (let btns of operatorBtn) {
        btns.removeEventListener('click', saveOperator);
    }

    if (operatorValue === 'x') {
       finalValue = firstNumFinal * secondNumFinal;
       screen.innerHTML = finalValue;
    } else if (operatorValue === '/') {
           let finalValue = firstNumFinal / secondNumFinal;
           screen.innerHTML = finalValue;
        } else if (operatorValue === '-') {
               let finalValue = screen.innerHTML = firstNumFinal - secondNumFinal;
            } else if (operatorValue === '+') {
                   let finalValue = screen.innerHTML = parseInt(firstNumFinal) + parseInt(secondNumFinal);
                }
    // firstNumberArray = finalValue.split('');
    firstNumberArray = [];
    secondNumberArray = [];
    secondNumFinal = '';
    operatorValue = '';
    firstNumFinal = '';

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
