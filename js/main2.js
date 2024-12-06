function evaluateTrivia() {
    let correctAnswers = 0;

    // Pregunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") {
        correctAnswers++;
    }

    // Pregunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "correct") {
        correctAnswers++;
    }

    // Pregunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "correct") {
        correctAnswers++;
    }

    // Mostrar resultado
    const resultDiv = document.getElementById("result");
    if (correctAnswers === 3) {
        resultDiv.innerHTML = `<h3 class="text-success">¡Excelente! Respondiste todas correctamente.</h3>`;
    } else if (correctAnswers > 0) {
        resultDiv.innerHTML = `<h3 class="text-warning">Respondiste ${correctAnswers} preguntas correctamente.</h3>`;
    } else {
        resultDiv.innerHTML = `<h3 class="text-danger">No acertaste ninguna. ¡Inténtalo de nuevo!</h3>`;
    }
}
