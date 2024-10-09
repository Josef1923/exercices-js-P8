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