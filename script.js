//Requirements
// 1.  Display value of buttons clicked in the screen:
//          a. display in screen each number clicked before operator is clicked
//          b. upon clicking operator:
//              store first number
//          c. upon clicking another number
//              store operator
//              display second number(s) on screen
//          d. upon clicking equals
//              return result
// 2.  If "C" is clicked:
//         reset the screen to 0
//         remove previously set number 1 and operator, if applicable
// 3.  If backspace is clicked, remove the last button value from the screen
// 4.  If equal is clicked, run a function that performs the operation on the two numbers







let eventHandlers = {
    setupEventListeners: function() {
        let buttons = document.getElementsByClassName('button-row');
        buttons.addEventListener('click', function(e)) {
            let buttonClicked = e.target;

        }
    }
}