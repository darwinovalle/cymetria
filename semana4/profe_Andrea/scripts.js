document.getElementById('generar').addEventListener('click', function() {
    const numerosInput = document.getElementById('numerosInput').value;
    const numerosSeleccionados = numerosInput.split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => num >= 1 && num <= 49);

    // Check for exactly 6 numbers and ensure they are unique
    const numerosUnicos = new Set(numerosSeleccionados);

    if (numerosSeleccionados.length !== 6 || numerosUnicos.size !== 6) {
        document.getElementById('resultado').innerText = "Por favor, selecciona exactamente 6 números únicos entre 1 y 49.";
        return;
    }

    const numerosGanadores = generarNumerosGanadores();
    const aciertos = contarAciertos(numerosSeleccionados, numerosGanadores);

    document.getElementById('resultado').innerText = `Números ganadores: ${numerosGanadores.join(', ')}. Tienes ${aciertos} aciertos.`;
});

// Función para generar números ganadores aleatorios
function generarNumerosGanadores() {
    const numeros = new Set(); // Use a Set to ensure unique numbers

    while (numeros.size < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
        numeros.add(numeroAleatorio); // Set automatically handles duplicates
    }

    return Array.from(numeros); // Convert the Set back to an array
}

// Función para contar los aciertos
function contarAciertos(seleccionados, ganadores) {
    return seleccionados.filter(num => ganadores.includes(num)).length;
}