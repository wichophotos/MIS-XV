// Configuración base de ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: true,
    mobile: true
});

// Configuraciones específicas para cada tipo de elemento
const fadeUp = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true,
    delay: 200,
    interval: 200
};

const fadeIn = {
    distance: '0px',
    opacity: 0,
    duration: 1000,
    reset: true,
    delay: 200
};

// Animaciones para las cartas
sr.reveal('.carta-item', fadeUp);

// Animaciones para los iconos de vestimenta
sr.reveal('.vestimenta-item', {
    ...fadeUp,
    interval: 300
});

// Animaciones para las fotos de la galería
sr.reveal('.momento-item', {
    ...fadeUp,
    interval: 400
});

// Animaciones para los botones
sr.reveal('.btn-carta', {
    ...fadeUp,
    distance: '30px',
    interval: 250
});

// Animación especial para el botón de música
sr.reveal('.music-btn', {
    ...fadeIn,
    delay: 500
});

// Animación para el itinerario
sr.reveal('.itinerario-img', {
    ...fadeUp,
    distance: '100px',
    duration: 1200
});

// Animación para la cuenta regresiva
sr.reveal('.countdown-box', {
    ...fadeUp,
    interval: 300
});

// Animación para los elementos de nombramientos
sr.reveal('.nombramiento-item', fadeUp);