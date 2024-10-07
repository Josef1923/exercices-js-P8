// Créez votre fonction ici
function calculate(a, b, operateur) {
    let result;

    a = Number(a);
    b = Number(b);

    if (operateur === '+') {
        result = a + b;
    }
    if (operateur === '-') {
        result = a - b;
    }
    if (operateur === '*') {
        result = a * b;
    }
    if (operateur === '/') {
        if (b === 0) {
            return 'Division by zero is not allowed';
        } else {
            result = a / b;
        }
    }

    const operateurValides = ['+', '-', '*', '/'];
    if (!operateurValides.includes(operateur)) {
        return 'Invalid operator';
    }

    return result;
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
