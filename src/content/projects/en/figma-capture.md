---
title: "Figma Capture"
description: "A Chrome extension that serializes a web page's DOM so you can paste it into Figma as editable layers."
date: "2025-11-01"
tags: ["chrome-extension", "figma", "dom", "typescript"]
external_url: "https://github.com/djalmajr/figma-capture-extension"
featured: false
---

**Figma Capture** is a Chrome extension that serializes a web page's DOM and
copies it to the clipboard, so it can be pasted into Figma as editable layers.
Capture is a single click, with no popup and no configuration.

## Features

- One-click DOM-to-clipboard capture.
- Clipboard-only flow: no target file, no page reload, no URL changes.
- The extension icon stays active while the capture toolbar is visible.
- No data is collected or transmitted.

## Stack and license

Built with TypeScript and bundled with Bun (`bun build.js`). Open source under
the MIT license; load it unpacked from `chrome://extensions`.
