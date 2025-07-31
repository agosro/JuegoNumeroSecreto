# Juego del Número Secreto

## Descripción

Este proyecto es un juego web donde el usuario debe adivinar un número secreto generado aleatoriamente entre 1 y un valor máximo configurable (por defecto 10).  
El juego guía al usuario indicando si el número ingresado es mayor o menor que el número secreto, y cuenta la cantidad de intentos realizados hasta acertar.

---

## Funcionalidades principales

- Generar un número secreto aleatorio que no se repite hasta que se agoten todos los posibles números.
- Permitir al usuario ingresar números para intentar adivinar el número secreto.
- Informar al usuario si su número es mayor o menor que el número secreto.
- Contar la cantidad de intentos realizados.
- Permitir reiniciar el juego para volver a comenzar.

---

## Estructura del proyecto

- `index.html` : archivo con la estructura HTML para la interfaz del juego.
- `app.js` : archivo JavaScript con la lógica para generar el número secreto, verificar intentos, y controlar el flujo del juego.
- `styles.css` : estilos para la presentación visual del juego.

---

## Cómo usar

1. Abrir el archivo `index.html` en un navegador web moderno.
2. Introducir un número entre 1 y el número máximo indicado (por defecto 10).
3. Presionar el botón para verificar el intento.
4. Leer la pista en pantalla para ajustar el siguiente número ingresado.
5. Continuar hasta adivinar el número secreto.
6. Reiniciar el juego usando el botón correspondiente para jugar otra vez.

---

## Dependencias

El proyecto está desarrollado con HTML, CSS y JavaScript puro, sin dependencias externas ni librerías adicionales.

