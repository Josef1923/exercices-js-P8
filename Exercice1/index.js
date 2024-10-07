//votre code ici
function pairNumbers(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0)
            result.push(i)
    }
    return result.join(',')
}

export default pairNumbers
