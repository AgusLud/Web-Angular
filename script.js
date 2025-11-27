document.addEventListener("DOMContentLoaded", () => {

    const preguntas = [
        { pregunta: "¿Quién creó Angular?", opciones: ["Google", "Microsoft", "Meta"], correcta: 0 },
        { pregunta: "¿En qué lenguaje está basado Angular?", opciones: ["JavaScript", "TypeScript", "Python"], correcta: 1 },
        { pregunta: "¿Qué tipo de framework es Angular?", opciones: ["Backend", "Frontend", "Base de datos"], correcta: 1 },
        { pregunta: "¿Qué versión moderna se conoce como Angular?", opciones: ["AngularJS", "Angular 2+", "React-Angular"], correcta: 1 },
        { pregunta: "¿Qué arquitectura utiliza Angular?", opciones: ["Componentes", "Clases puras", "Arquitectura plana"], correcta: 0 },
        { pregunta: "¿Qué empresa mantiene Angular?", opciones: ["Google", "Amazon", "IBM"], correcta: 0 }
    ];

    let indice = 0;
    let puntaje = 0;
    let tiempo = 30;
    let intervalo;

    const txtPregunta = document.getElementById("pregunta");
    const divOpciones = document.getElementById("opciones");
    const txtPuntaje = document.getElementById("puntaje");
    const txtTiempo = document.getElementById("tiempo");
    const btnReiniciar = document.getElementById("reiniciar");

    function iniciarTrivia() {
        indice = 0;
        puntaje = 0;
        tiempo = 30;

        txtPuntaje.textContent = puntaje;
        txtTiempo.textContent = tiempo;

        mostrarPregunta();
        iniciarTemporizador();
    }

    function mostrarPregunta() {
        const p = preguntas[indice];
        txtPregunta.textContent = p.pregunta;

        divOpciones.innerHTML = "";

        p.opciones.forEach((op, i) => {
            const boton = document.createElement("button");
            boton.textContent = op;
            boton.className = "btn-opcion";
            boton.onclick = () => verificarRespuesta(i);
            divOpciones.appendChild(boton);
        });
    }

    function verificarRespuesta(i) {
        if (i === preguntas[indice].correcta) {
            puntaje++;
            txtPuntaje.textContent = puntaje;
        }

        indice++;

        if (indice < preguntas.length) {
            mostrarPregunta();
        } else {
            terminarTrivia();
        }
    }

    function iniciarTemporizador() {
        clearInterval(intervalo);
        intervalo = setInterval(() => {
            tiempo--;
            txtTiempo.textContent = tiempo;

            if (tiempo <= 0) {
                terminarTrivia();
            }
        }, 1000);
    }

    function terminarTrivia() {
        clearInterval(intervalo);
        txtPregunta.textContent = "Trivia finalizada 🎉";
        divOpciones.innerHTML = "";
    }

    btnReiniciar.onclick = iniciarTrivia;

    iniciarTrivia();
});
