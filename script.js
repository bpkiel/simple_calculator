
let screen = document.getElementById('js-screen');
let numberBtns = document.getElementsByClassName('js-num-button');
let operatorBtns = document.getElementsByClassName('js-operator-btn');
let backSpace = document.getElementById('js-backspace-btn');
let clear = document.getElementById('js-clear-btn');
let equalsButton = document.getElementById('js-equals-btn');
let firstNumberFinal = '';
let operatorValue = '';
let operatorColor = '';

backSpace.addEventListener('click', backspace);
clear.addEventListener('click', clearAll);
equalsButton.addEventListener('click', runCalculation);
for (let btns of numberBtns) {
    btns.addEventListener('click', firstNumber);
}
for (let btns of operatorBtns) {
    btns.addEventListener('click', saveOperator)
}

let firstNumberArray = [];
let secondNumberArray = [];

function firstNumber(e) {
    if (firstNumberArray.length < 8) {
        firstNumberArray.push(e.target.innerHTML);
        screen.innerHTML = firstNumberArray.join('');
    }
}

function secondNumber(e) {
    screen.innerHTML = 0;
    if (secondNumberArray.length < 8) {
        secondNumberArray.push(e.target.innerHTML);
        screen.innerHTML = secondNumberArray.join('');
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
}

function saveOperator(e) {
    if (secondNumberArray.length > 0) {
        clearAll();
    } else {
        operatorValue = e.target.innerHTML;
    }
    if (firstNumberArray.length > 0) {
        firstNumberFinal = parseInt(firstNumberArray.join(''));
    } else {
        firstNumberFinal = 0;
    }
    operatorColor = e.target.style.backgroundColor = 'darkOrange';
    resetButtonsAfter ('operator');
}


function backspace() {
    if (secondNumberArray.length > 0) {
        secondNumberArray.pop();
        screen.innerHTML = secondNumberArray.join('');
    } else {
        firstNumberArray.pop();
        if (firstNumberArray.length > 0) {
            screen.innerHTML = firstNumberArray.join('');
            for (let btns of operatorBtns) {
                btns.addEventListener('click', saveOperator);
                btns.style.backgroundColor = 'orange';
    }
        } else {
            screen.innerHTML = 0;
        }
    }
}

function clearAll() {
    screen.innerHTML = 0;
    firstNumberArray = [];
    secondNumberArray = [];
    firstNumberFinal = '';
    resetButtonsAfter ('clear');
}

function runCalculation() {

    let finalValue;
    let secondNumberFinal;

    if (secondNumberArray.length > 0) {
        secondNumberFinal = parseInt(secondNumberArray.join(''));
    } else {
        secondNumberFinal = 0;
    }

    switch(operatorValue) {
        case 'x':
            finalValue = firstNumberFinal * secondNumberFinal;
            screen.innerHTML = finalValue;
            break;
        case '/':
            finalValue = firstNumberFinal / secondNumberFinal;
            screen.innerHTML = finalValue;
            break;
        case '-':
            finalValue = firstNumberFinal - secondNumberFinal;
            screen.innerHTML = finalValue;
            break;
        case '+':
            finalValue = parseInt(firstNumberFinal) + parseInt(secondNumberFinal);
            screen.innerHTML = finalValue;
            break;
    }
    screen.innerHTML = finalValue;
    firstNumberArray = finalValue.toString().split('');
    secondNumberArray = [];
    secondNumberFinal = '';
    resetButtonsAfter('equals');
}

function resetButtonsAfter (button) {
  if (button === 'clear') {
      for (let btns of numberBtns) {
        btns.addEventListener('click', firstNumber);
        btns.removeEventListener('click', secondNumber);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
  }
  if (button === 'operator') {
      for (let btns of numberBtns) {
        btns.removeEventListener('click', firstNumber);
        btns.addEventListener('click', secondNumber);
     }
  }
  if (button === 'equals') {
    for (let btns of numberBtns) {
        btns.removeEventListener('click', firstNumber);
        btns.addEventListener('click', secondNumber);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
  }
}

