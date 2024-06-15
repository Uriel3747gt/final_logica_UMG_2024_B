function validateInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    errorElement.innerText = "";
    resultElement.innerHTML = "";

    if (!input1 || !input2 || !input3) {
        errorElement.innerText = "Todos los campos son obligatorios.";
        return;
    }

    const num1 = Number(input1);
    const num2 = Number(input2);
    const num3 = Number(input3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        errorElement.innerText = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    let resultText = "";

    if (num1 > num2) {
        const result = num1 * num2 * num3;
        resultText = `Multiplicando ${num1} * ${num2} * ${num3} = ${result}`;
    } else if (num2 === 0) {
        const result = Math.abs(num1 - num3);
        resultText = `Restando ${Math.max(num1, num3)} - ${Math.min(num1, num3)} = ${result}`;
    } else if (num1 === num2) {
        const result = num1 + num2 + num3;
        resultText = `Sumando ${num1} + ${num2} + ${num3} = ${result}`;
    }

    const li = document.createElement('li');
    li.innerText = resultText;
    resultElement.appendChild(li);

    clearInputs();
}

function repeatOperation() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    errorElement.innerText = "";
    resultElement.innerHTML = "";

    if (!input1 || !input2 || !input3) {
        errorElement.innerText = "Todos los campos son obligatorios.";
        return;
    }

    const num1 = Number(input1);
    const num2 = Number(input2);
    const num3 = Number(input3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        errorElement.innerText = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    const sum = num1 + num2 + num3;
    let resultText = "";

    if (sum > 10) {
        const result = num1 * num2 + num3;
        for (let i = 0; i < sum; i++) {
            resultText = `Repetición ${i + 1}: Multiplicando ${num1} * ${num2} + ${num3} = ${result}`;
            const li = document.createElement('li');
            li.innerText = resultText;
            resultElement.appendChild(li);
        }
    } else {
        const result = num1 + num2 + num3;
        for (let i = 0; i < sum; i++) {
            resultText = `Repetición ${i + 1}: Sumando ${num1} + ${num2} + ${num3} = ${result}`;
            const li = document.createElement('li');
            li.innerText = resultText;
            resultElement.appendChild(li);
        }
    }

    clearInputs();
}

function clearInputs() {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
}
