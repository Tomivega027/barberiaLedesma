// ===============================
// CARRUSEL DE IMÁGENES
// ===============================

const slides = document.querySelectorAll(".slide");

let actual = 0;

// Ocultar todas menos la primera
for(let i = 1; i < slides.length; i++){
    slides[i].style.display = "none";
}

setInterval(() => {

    slides[actual].style.display = "none";

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    slides[actual].style.display = "block";

}, 3000);


// ===============================
// BOTÓN DE RESERVA
// ===============================

const botonReserva = document.getElementById("btnReserva");

if(botonReserva){

    botonReserva.addEventListener("click", () => {

        alert("Serás redirigido a WhatsApp para reservar tu turno.");

    });

}


// ===============================
// RELOJ EN TIEMPO REAL
// ===============================

const reloj = document.getElementById("hora");

if(reloj){

    setInterval(() => {

        const fecha = new Date();

        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

        if(minutos < 10){
            minutos = "0" + minutos;
        }

        if(segundos < 10){
            segundos = "0" + segundos;
        }

        reloj.textContent =
            `Hora actual: ${horas}:${minutos}:${segundos}`;

    }, 1000);

}