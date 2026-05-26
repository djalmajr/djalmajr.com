---
title: "Buntime"
description: "Un runtime Bun con un pool de workers aislados, un sistema de plugins y un shell de micro-frontends, gestionado mediante un panel de control web y desplegado en Kubernetes."
date: "2025-06-01"
tags: ["bun", "hono", "runtime", "kubernetes", "typescript"]
featured: true
---

**Buntime** es un runtime Bun, desarrollado en Zomme, para ejecutar aplicaciones
en un pool de workers aislados. Añade un sistema de plugins y un shell de
micro-frontends, y se opera mediante un panel de control web. El código es un
monorepo que abarca el runtime, el panel de control, los plugins principales y
los Helm charts.

## Qué hace

Buntime ejecuta aplicaciones como workers en un pool gestionado por LRU. Los
workers pueden ser efímeros o persistentes, y cada uno está aislado. Está
construido sobre [Bun](https://bun.sh) y [Hono](https://hono.dev). Un sistema de
plugins proporciona las capacidades de la plataforma mediante descubrimiento
automático, hooks `onInit`/`onRequest`/`onResponse`/`onShutdown`, un registro de
servicios y modos persistente o serverless. Un shell de micro-frontends aloja
las interfaces del operador y de las aplicaciones mediante iframes.

## Componentes

- **Runtime** — pool de workers, enrutamiento multicapa, API REST y descubrimiento de servicios.
- **CPanel** — SPA del operador (React + TanStack Router) para gestionar workers, plugins y claves de API.
- **Plugins** — gateway, proxy, deployments, vhosts, authn (OIDC/JWT), authz (XACML), logs, métricas.
- **Datos** — `@buntime/keyval` (similar a Deno KV), Turso/libSQL y una capa de base de datos con múltiples adaptadores.
- **Operaciones** — Helm charts para Kubernetes, imágenes Docker, versionado dual y flujos de release en CI.

## Stack

Bun, Hono, TypeScript, Biome y Playwright, con paquetes compartidos publicados
en npm (`@zomme/bun-plugin-*`) y en JSR (`@buntime/shared`). Se despliega en
Kubernetes mediante Helm.

## Licencia

Source-available bajo la [licencia O'Saasy](https://osaasy.dev): libre para usar
y modificar, con los derechos de SaaS y alojamiento reservados al titular de los
derechos de autor.
