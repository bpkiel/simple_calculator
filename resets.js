

function resetButtonsAfterClear() {
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

function resetButtonsAfterOperator() {
     for (let btns of numBtn) {
        btns.removeEventListener('click', firstNum);
     }
     for (let btns of numBtn) {
         btns.addEventListener('click', secondNum);
     }
}

function resetButtonsAfterCalc() {
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

export {resetButtonsAfterOperator, resetButtonsAfterClear, resetButtonsAfterCalc};