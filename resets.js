

function resetButtonsAfter (button) {
  if (button === 'clear') {
      for (let btns of numBtns) {
        btns.addEventListener('click', firstNum);
    }
    for (let btns of numBtns) {
        btns.removeEventListener('click', secondNum);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
  }
  if (button === 'operator') {
      for (let btns of numBtns) {
        btns.removeEventListener('click', firstNum);
     }
     for (let btns of numBtns) {
         btns.addEventListener('click', secondNum);
     }
  }
  if (button === 'equals') {
    for (let btns of numBtns) {
        btns.removeEventListener('click', firstNum);
    }
    for (let btns of numBtns) {
        btns.addEventListener('click', secondNum);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
  }
}

function resetButtonsAfterClear(numBtns, operatorBtns, firstNum, secondNum, saveOperator) {
    for (let btns of numBtns) {
        btns.addEventListener('click', firstNum);
    }
    for (let btns of numBtns) {
        btns.removeEventListener('click', secondNum);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
}

function resetButtonsAfterOperator(numBtns, firstNum, secondNum) {
     for (let btns of numBtns) {
        btns.removeEventListener('click', firstNum);
     }
     for (let btns of numBtns) {
         btns.addEventListener('click', secondNum);
     }
}

function resetButtonsAfterCalc(numBtns, operatorBtns, firstNum, secondNum, saveOperator) {
    for (let btns of numBtns) {
        btns.removeEventListener('click', firstNum);
    }
    for (let btns of numBtns) {
        btns.addEventListener('click', secondNum);
    }
    for (let btns of operatorBtns) {
        btns.addEventListener('click', saveOperator);
        btns.style.backgroundColor = 'orange';
    }
}

export {resetButtonsAfterOperator, resetButtonsAfterClear, resetButtonsAfterCalc};