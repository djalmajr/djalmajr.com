---
title: "AsciiMark"
description: "Un visor y editor de AsciiDoc y Markdown local-first — aplicación de escritorio y extensión para Chrome. Renderiza localmente, sin telemetría."
date: "2025-09-01"
tags: ["asciidoc", "markdown", "local-first", "tauri", "solidjs"]
external_url: "https://asciimark.djalmajr.dev"
featured: true
---

**AsciiMark** es un visor y editor local-first para **AsciiDoc y Markdown**.
Funciona como aplicación de escritorio (Tauri) y como extensión para Chrome. El
renderizado ocurre en tu dispositivo; no hay cuenta, servidor ni telemetría.

## Propósito

AsciiMark lee y escribe documentos técnicos directamente desde los archivos
locales. Trata el sistema de archivos como la fuente de la verdad y funciona sin
conexión. Los documentos permanecen en tu dispositivo.

## Funciones

- AsciiDoc (Asciidoctor) y Markdown (markdown-it), con diagramas Mermaid/Kroki
  y fórmulas matemáticas KaTeX.
- Paneles divididos, pestañas de vista previa al estilo de VS Code y un modo
  Lectura/Zen.
- Quick Open, Command Palette, Go to Heading, Workspace Symbols y Find in Files.
- Panel de backlinks y búsqueda de títulos en todo el workspace.
- Workspaces con múltiples raíces, monitor del sistema de archivos, archivos
  recientes y favoritos.
- Sin analíticas, sin telemetría, sin backend.

![Paneles divididos](/projects/asciimark/split-panes.png)

![Command palette](/projects/asciimark/command-palette.png)

## Disponibilidad

AsciiMark es **source-available, no open source**. El código es público por
transparencia y para auditorías de seguridad, pero no está licenciado para su
reutilización o redistribución. La aplicación es gratuita:

- **Escritorio** (macOS, Linux, Windows): [última versión](https://github.com/djalmajr/asciimark/releases/latest)
- **Extensión para Chrome**: [Chrome Web Store](https://chromewebstore.google.com/detail/asciimark/dmcihjkjbeckainfkaddpkeghlllmkbk)
- **Sitio web**: [asciimark.djalmajr.dev](https://asciimark.djalmajr.dev)
