---
title: "Figma Capture"
description: "Una extensión para Chrome que serializa el DOM de una página web para que puedas pegarlo en Figma como capas editables."
date: "2025-11-01"
tags: ["chrome-extension", "figma", "dom", "typescript"]
external_url: "https://github.com/djalmajr/figma-capture-extension"
featured: false
---

**Figma Capture** es una extensión para Chrome que serializa el DOM de una
página web y lo copia al portapapeles, para pegarlo en Figma como capas
editables. La captura se hace con un clic, sin popup y sin configuración.

## Funciones

- Captura del DOM al portapapeles con un solo clic.
- Flujo solo por portapapeles: sin archivo de destino, sin recargar la página, sin cambios de URL.
- El icono de la extensión permanece activo mientras la barra de captura está visible.
- No se recopila ni se transmite ningún dato.

## Stack y licencia

Desarrollado con TypeScript y empaquetado con Bun (`bun build.js`). Open source
bajo la licencia MIT; cárgala sin empaquetar desde `chrome://extensions`.
