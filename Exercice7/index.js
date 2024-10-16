function convertToBinary() {
    const value = document.getElementById('decimalInput').value;

    const convertedNumber = Number(value);

    if (Number.isNaN(convertedNumber) || !Number.isInteger(convertedNumber) || convertedNumber < 0) {
        document.getElementById("binaryResult").innerText = "";
        return;
    }

    let binaryResult = "";
    let remainingValue = convertedNumber;


    do {
        const remainder = remainingValue % 2;
        binaryResult = remainder + binaryResult;
        remainingValue = Math.floor(remainingValue / 2);
    } while (remainingValue > 0);

    document.getElementById('binaryResult').innerText = binaryResult;
}
