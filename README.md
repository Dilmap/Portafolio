<div align="center">

# 🃏 DILMAP Portfolio - Tabletop Card Theme
### Single-Page Application (SPA) Interactiva

> *"Transformando lógica pura en soluciones visuales y arquitecturas de bases de datos robustas."*

[**Visitar el Portafolio en Vivo**](https://dilmap.github.io/Portafolio/) <!-- REEMPLAZA ESTE ENLACE -->

---

</div>

## 📌 Sobre el Proyecto

Este es mi portafolio personal y profesional, diseñado y desarrollado desde cero sin el uso de frameworks CSS o librerías externas. La interfaz está construida con un concepto inmersivo de **Juego de Cartas de Mesa**, donde los elementos interactivos se comportan como cartas que el usuario puede voltear y explorar.

El objetivo de esta arquitectura fue priorizar el rendimiento visual, la interactividad pura en el DOM y la escalabilidad de idiomas manteniendo un código limpio y modular.

## ✨ Características Principales (Atributos de Clase)

* **🃏 Mecánicas 3D (Card Flips):** Animaciones CSS avanzadas (`preserve-3d`, `rotateY`) para interactuar con las habilidades y medios de contacto.
* **📏 Strict Adaptive Sizing:** Diseño 100% responsivo y fluido construido exclusivamente con unidades de viewport (`vw`, `vh`), eliminando por completo la necesidad de *Media Queries* tradicionales.
* **🌐 Internacionalización Dinámica (i18n):** Sistema propio de cambio de idioma (ES/EN) sin recargar la página, consumiendo diccionarios de datos locales mediante `Fetch API` asíncrono y archivos `JSON`.
* **🎨 Temática Estricta:** Uso coherente de paleta de colores basada en los palos de la baraja (♠️ Picas, ♦️ Diamantes, ♣️ Tréboles, ♥️ Corazones) y fondos generados por SVG en línea para optimización de carga.

## 🛠️ Tecnologías Empleadas

[![HTML5](https://img.shields.io/badge/HTML5-2B7574?style=for-the-badge&logo=html5&logoColor=E2E2E0&labelColor=0E2931)](#)
[![CSS3](https://img.shields.io/badge/CSS3-2B7574?style=for-the-badge&logo=css3&logoColor=E2E2E0&labelColor=0E2931)](#)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-2B7574?style=for-the-badge&logo=javascript&logoColor=E2E2E0&labelColor=0E2931)](#)
[![JSON](https://img.shields.io/badge/JSON-861211?style=for-the-badge&logo=json&logoColor=E2E2E0&labelColor=0E2931)](#)

*(El portafolio expone mis competencias en ecosistemas más complejos como Angular, NodeJS, MySQL, TypeScript y Python).*

## 📁 Estructura del Proyecto

```text
📦 Portfolio-DILMAP
 ┣ 📂 css
 ┃ ┗ 📜 style.css         # Lógica de estilos, variables CSS y keyframes 3D
 ┣ 📂 js
 ┃ ┗ 📜 script.js         # Manipulación del DOM, toggle 3D y Fetch API
 ┣ 📂 lang
 ┃ ┣ 📜 en.json           # Diccionario de datos en Inglés
 ┃ ┗ 📜 es.json           # Diccionario de datos en Español
 ┣ 📂 img                 # Assets visuales (WEBP, SVG optimizados)
 ┣ 📂 document            # Archivos descargables (CV)
 ┗ 📜 index.html          # Estructura semántica principal
