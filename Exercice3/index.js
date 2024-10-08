// Créez votre fonction ici
function calculateAverage(nombres) {
    if (!Array.isArray(nombres) || nombres.length === 0) {
        return 'No numbers to calculate average';
    }

    let somme = 0;
    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }

    let moyenne = somme / nombres.length;

    return moyenne;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
