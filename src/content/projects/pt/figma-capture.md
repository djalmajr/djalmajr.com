---
title: "Figma Capture"
description: "Uma extensão para Chrome que serializa o DOM de uma página web para você colar no Figma como camadas editáveis."
date: "2025-11-01"
tags: ["chrome-extension", "figma", "dom", "typescript"]
external_url: "https://github.com/djalmajr/figma-capture-extension"
featured: false
---

O **Figma Capture** é uma extensão para Chrome que serializa o DOM de uma página
web e o copia para a área de transferência, para ser colado no Figma como
camadas editáveis. A captura é feita com um clique, sem popup e sem configuração.

## Recursos

- Captura do DOM para a área de transferência em um clique.
- Fluxo apenas pela área de transferência: sem arquivo de destino, sem recarregar a página, sem mudanças de URL.
- O ícone da extensão permanece ativo enquanto a barra de captura está visível.
- Nenhum dado é coletado ou transmitido.

## Stack e licença

Desenvolvido com TypeScript e empacotado com Bun (`bun build.js`). Open source
sob a licença MIT; carregue-o sem empacotar a partir de `chrome://extensions`.
