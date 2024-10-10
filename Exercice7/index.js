function convertToBinary() {
    const valeur = document.getElementById('decimalInput').value;

    const nombreConverti = Number(valeur);

    if (Number.isNaN(nombreConverti) || !Number.isInteger(nombreConverti) || nombreConverti < 0) {
        document.getElementById("binaryResult").innerText = "";
        return;
    }

    let binaryResult = "";
    let valeurRestante = nombreConverti;


    while (valeurRestante > 0) {
        const remainder = valeurRestante % 2;
        binaryResult = remainder + binaryResult;
        valeurRestante = Math.floor(valeurRestante / 2);
    }

    document.getElementById('binaryResult').innerText = binaryResult || "0";
}
