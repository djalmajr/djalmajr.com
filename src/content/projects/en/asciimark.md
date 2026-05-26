---
title: "AsciiMark"
description: "A local-first AsciiDoc and Markdown viewer and editor — desktop app and Chrome extension. Renders locally, no telemetry."
date: "2025-09-01"
tags: ["asciidoc", "markdown", "local-first", "tauri", "solidjs"]
external_url: "https://asciimark.djalmajr.dev"
featured: true
---

**AsciiMark** is a local-first viewer and editor for **AsciiDoc and Markdown**.
It runs as a desktop app (Tauri) and as a Chrome extension. Rendering happens on
your device; there is no account, no server, and no telemetry.

## Purpose

AsciiMark reads and writes technical documents directly from local files. It
treats the filesystem as the source of truth and works offline. Documents stay
on your device.

## Features

- AsciiDoc (Asciidoctor) and Markdown (markdown-it), with Mermaid/Kroki diagrams
  and KaTeX math.
- Split panes, VS Code–style preview tabs, and a Reader/Zen mode.
- Quick Open, Command Palette, Go to Heading, Workspace Symbols, Find in Files.
- Backlinks panel and workspace-wide heading search.
- Multi-root workspaces, file-system watcher, recent files, and favorites.
- No analytics, no telemetry, no backend.

![Split panes](/projects/asciimark/split-panes.png)

![Command palette](/projects/asciimark/command-palette.png)

## Availability

AsciiMark is **source-available, not open source**. The source is public for
transparency and security audits, but it is not licensed for reuse or
redistribution. The app is free to use:

- **Desktop** (macOS, Linux, Windows): [latest release](https://github.com/djalmajr/asciimark/releases/latest)
- **Chrome extension**: [Chrome Web Store](https://chromewebstore.google.com/detail/asciimark/dmcihjkjbeckainfkaddpkeghlllmkbk)
- **Website**: [asciimark.djalmajr.dev](https://asciimark.djalmajr.dev)
