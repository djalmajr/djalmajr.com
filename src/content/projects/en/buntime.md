---
title: "Buntime"
description: "A Bun runtime with an isolated worker pool, a plugin system and a micro-frontend shell, managed through a web control panel and deployed on Kubernetes."
date: "2025-06-01"
tags: ["bun", "hono", "runtime", "kubernetes", "typescript"]
featured: true
---

**Buntime** is a Bun runtime, built at Zomme, for running applications in an
isolated worker pool. It adds a plugin system and a micro-frontend shell, and is
operated through a web control panel. The codebase is a monorepo covering the
runtime, the control panel, the core plugins, and the Helm charts.

## What it does

Buntime runs applications as workers in an LRU-managed pool. Workers can be
ephemeral or persistent, and each is isolated. It is built on
[Bun](https://bun.sh) and [Hono](https://hono.dev). A plugin system provides the
platform capabilities through auto-discovery,
`onInit`/`onRequest`/`onResponse`/`onShutdown` hooks, a service registry, and
persistent or serverless modes. A micro-frontend shell hosts operator and
application UIs via iframes.

## Components

- **Runtime** — worker pool, multi-layer routing, REST API, and service discovery.
- **CPanel** — operator SPA (React + TanStack Router) for managing workers, plugins, and API keys.
- **Plugins** — gateway, proxy, deployments, vhosts, authn (OIDC/JWT), authz (XACML), logs, metrics.
- **Data** — `@buntime/keyval` (Deno KV-like), Turso/libSQL, and a multi-adapter database layer.
- **Ops** — Helm charts for Kubernetes, Docker images, dual versioning, and CI release flows.

## Stack

Bun, Hono, TypeScript, Biome, and Playwright, with shared packages published to
npm (`@zomme/bun-plugin-*`) and JSR (`@buntime/shared`). It is deployed on
Kubernetes via Helm.

## License

Source-available under the [O'Saasy license](https://osaasy.dev): free to use
and modify, with SaaS and hosting rights reserved for the copyright holder.
