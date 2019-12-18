//Requirements
// 1.  Display value of buttons clicked in the screen
// 2.  If "C" is clicked, reset the screen to 0
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