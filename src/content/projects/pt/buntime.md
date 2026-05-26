---
title: "Buntime"
description: "Um runtime Bun com um pool de workers isolados, um sistema de plugins e um shell de micro-frontends, gerenciado por um painel de controle web e implantado em Kubernetes."
date: "2025-06-01"
tags: ["bun", "hono", "runtime", "kubernetes", "typescript"]
featured: true
---

O **Buntime** é um runtime Bun, desenvolvido na Zomme, para executar aplicações
em um pool de workers isolados. Ele adiciona um sistema de plugins e um shell de
micro-frontends, e é operado por um painel de controle web. O código é um
monorepo que abrange o runtime, o painel de controle, os plugins principais e os
Helm charts.

## O que ele faz

O Buntime executa aplicações como workers em um pool gerenciado por LRU. Os
workers podem ser efêmeros ou persistentes, e cada um é isolado. Ele é
construído sobre [Bun](https://bun.sh) e [Hono](https://hono.dev). Um sistema de
plugins fornece as capacidades da plataforma por meio de descoberta automática,
hooks `onInit`/`onRequest`/`onResponse`/`onShutdown`, um registro de serviços e
modos persistente ou serverless. Um shell de micro-frontends hospeda as
interfaces do operador e das aplicações via iframes.

## Componentes

- **Runtime** — pool de workers, roteamento em múltiplas camadas, API REST e descoberta de serviços.
- **CPanel** — SPA do operador (React + TanStack Router) para gerenciar workers, plugins e chaves de API.
- **Plugins** — gateway, proxy, deployments, vhosts, authn (OIDC/JWT), authz (XACML), logs, métricas.
- **Dados** — `@buntime/keyval` (similar ao Deno KV), Turso/libSQL e uma camada de banco de dados com múltiplos adaptadores.
- **Operação** — Helm charts para Kubernetes, imagens Docker, versionamento duplo e fluxos de release em CI.

## Stack

Bun, Hono, TypeScript, Biome e Playwright, com pacotes compartilhados publicados
no npm (`@zomme/bun-plugin-*`) e no JSR (`@buntime/shared`). É implantado em
Kubernetes via Helm.

## Licença

Source-available sob a [licença O'Saasy](https://osaasy.dev): livre para usar e
modificar, com os direitos de SaaS e hospedagem reservados ao detentor dos
direitos autorais.
