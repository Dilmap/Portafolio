/**
 * Lógica Vanilla JS para el Portafolio DILMAP
 */

// 1. Lógica de Cartas 3D
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// 2. Lógica del Idioma (Fetch API y JSON)
let currentLanguage = 'es';

// Carga asíncrona del archivo JSON correspondiente
async function fetchTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) throw new Error("Error HTTP: " + response.status);
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error("No se pudo cargar el idioma. Verifica que usas un Live Server local.", error);
    }
}

// Actualiza los textos del DOM
async function updateLanguage(lang) {
    const translations = await fetchTranslations(lang);
    if (!translations) return; // Sale si falla la carga

    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            // Usamos innerHTML para respetar etiquetas como <br> o <span>
            element.innerHTML = translations[key];
        }
    });
}

// Evento click del botón
document.getElementById('langToggle').addEventListener('click', function() {
    if (currentLanguage === 'es') {
        currentLanguage = 'en';
        this.textContent = 'EN / ES';
    } else {
        currentLanguage = 'es';
        this.textContent = 'ES / EN';
    }
    
    updateLanguage(currentLanguage);
});