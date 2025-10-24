// Fecha objetivo: 29 de noviembre de 2025 a las 3:00 PM
const targetDate = new Date('2025-11-29T15:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    // Si la fecha ya pasó, mostrar ceros
    if (difference < 0) {
        document.getElementById('countdown-days').textContent = '00';
        document.getElementById('countdown-hours').textContent = '00';
        document.getElementById('countdown-minutes').textContent = '00';
        document.getElementById('countdown-seconds').textContent = '00';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar los elementos con padding de ceros
    document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Actualizar inmediatamente al cargar
updateCountdown();