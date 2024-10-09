const display = document.getElementById('display');

function appendToDisplay(nombre) {
    display.value += nombre
}

function clearDisplay() {
    display.value = ''
}

function calculateResult() {
    display.value = eval(display.value);
}

function calculateResult() {
    try {
        if (display.value.includes('/0')) {
            throw new Error('Division by zero is not allowed');
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = error.message;
    }
}