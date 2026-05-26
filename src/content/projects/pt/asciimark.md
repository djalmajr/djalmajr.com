---
title: "AsciiMark"
description: "Um visualizador e editor de AsciiDoc e Markdown local-first — aplicativo de desktop e extensão para Chrome. Renderiza localmente, sem telemetria."
date: "2025-09-01"
tags: ["asciidoc", "markdown", "local-first", "tauri", "solidjs"]
external_url: "https://asciimark.djalmajr.dev"
featured: true
---

O **AsciiMark** é um visualizador e editor local-first para **AsciiDoc e Markdown**.
Funciona como aplicativo de desktop (Tauri) e como extensão para Chrome. A
renderização ocorre no seu dispositivo; não há conta, servidor nem telemetria.

## Propósito

O AsciiMark lê e escreve documentos técnicos diretamente dos arquivos locais.
Ele trata o sistema de arquivos como a fonte da verdade e funciona offline. Os
documentos permanecem no seu dispositivo.

## Recursos

- AsciiDoc (Asciidoctor) e Markdown (markdown-it), com diagramas Mermaid/Kroki
  e fórmulas matemáticas KaTeX.
- Painéis divididos, abas de pré-visualização no estilo do VS Code e um modo
  Leitura/Zen.
- Quick Open, Command Palette, Go to Heading, Workspace Symbols e Find in Files.
- Painel de backlinks e busca de títulos em todo o workspace.
- Workspaces com múltiplas raízes, monitor do sistema de arquivos, arquivos
  recentes e favoritos.
- Sem analytics, sem telemetria, sem backend.

![Painéis divididos](/projects/asciimark/split-panes.png)

![Command palette](/projects/asciimark/command-palette.png)

## Disponibilidade

O AsciiMark é **source-available, não open source**. O código é público para
fins de transparência e auditorias de segurança, mas não é licenciado para
reutilização ou redistribuição. O aplicativo é gratuito:

- **Desktop** (macOS, Linux, Windows): [última versão](https://github.com/djalmajr/asciimark/releases/latest)
- **Extensão para Chrome**: [Chrome Web Store](https://chromewebstore.google.com/detail/asciimark/dmcihjkjbeckainfkaddpkeghlllmkbk)
- **Site**: [asciimark.djalmajr.dev](https://asciimark.djalmajr.dev)
