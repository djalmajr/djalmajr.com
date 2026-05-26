# Plano: criar djalmajr.com (portfólio pessoal) com i18n + infra igual ao .dev

## Contexto
- Base: template **rubzip/academic-portfolio-astro** (Astro 6, Tailwind 4, npm, **sem i18n**, layout com sidebar). É acadêmico (Publications/Talks/Teaching/CV/Blog/Projects) e config-driven (`src/config/*`).
- Objetivo: `djalmajr.com` = site **pessoal** (Sobre + Portfólio + Blog + CV), destacando o **asciimark** como projeto; `djalmajr.dev` continua sendo o site de desenvolvimento. Os dois se referenciam.
- Mesma infra do `.dev`: **bun**, Node 26 (`.nvmrc`), **Cloudflare Pages** (direct upload via CI), **gitleaks**, CI, repo público. Aprendizados em `djalmajr.dev/.tmp/cloudflare-pages-learning.md`.

## Decisões confirmadas
- i18n **en/pt/es** com URL por idioma (Astro nativo, `en` base sem prefixo, `/pt`, `/es`) — mesma abordagem de wrappers `src/pages/[locale]/` do `.dev`.
- Seções: **Sobre + Portfólio + Blog + CV**. Remover **Publications/Talks/Teaching** e **dev-tools**.
- Cross-link **nav + rodapé** nos dois sites.
- Nome do projeto Cloudflare Pages: **`djalmajr-com`** (convenção repo-tld).

## Decisões adotadas (ajustáveis)
- Locale base = `en` (sem prefixo), `pt`/`es` prefixados — consistente com o `.dev`. Código de locale `pt` (conteúdo pt-BR).
- Conteúdo inicial em placeholder (bio/CV/asciimark) pra você refinar; UI 100% traduzida nos 3 idiomas.
- Repo GitHub `djalmajr/djalmajr.com` **público**, criado nesta tarefa.

## Etapas

### 1. Scaffold + bun
- Copiar template para `/Users/djalmajr/Developer/djalmajr/djalmajr.com` (preservando nada — dir vazio), `git init`, branch `feat/init`.
- Migrar npm→bun (`bun install`, remover `package-lock.json`), `.nvmrc` Node 26, ajustar scripts (`build` com `astro check`?), `package.json` name `djalmajr.com`.

### 2. Limpeza do template
- Remover seções acadêmicas: coleções `publications/talks/teaching` (em `content.config.ts`), páginas `src/pages/{publications,talks,teaching}`, e `src/pages/dev-tools/*` + `DevToolsLayout`.
- Remover conteúdo de exemplo (Claude Shannon) e ícones não usados.
- Ajustar `LICENSE` (atribuição ao autor do template + djalmajr), reescrever `README`.

### 3. Config do site (`src/config/*`)
- `site.ts`: `website https://djalmajr.com/`, `author djalmajr`, `title`, `desc` (pessoal), `lang en`.
- `navigation.ts`: Sobre (`/`), Portfólio (`/projects`), Blog (`/posts`), CV (`/cv`), + link externo **Dev → djalmajr.dev**.
- `social.ts`: github (djalmajr), x (dj4lm4jr), e link pro `.dev`.
- `SETTINGS.addDevToolsInProduction = false`.

### 4. i18n (parte mais sensível)
- `astro.config.mjs`: bloco `i18n` (`locales: ["en","pt","es"]`, `defaultLocale: "en"`, `prefixDefaultLocale: false`) + sitemap `i18n` (hreflang).
- Criar `src/i18n/` espelhando o `.dev`: `locales.ts` (`Locales`, `DEFAULT_LOCALE`, `NonDefaultLocales`), `types.ts` (`UIStrings`), `lang/{en,pt,es}.ts`, `index.ts` (`useTranslations`), `format.ts` (`tplStr`).
- Tornar **páginas e componentes locale-aware**: `Navbar`, `Footer`, `LeftSidebar`, listings/detalhes (index, projects, posts, tags, cv, 404, rss) — ler `Astro.currentLocale`, usar `useTranslations` e `getRelativeLocaleUrl` nos links internos.
- Criar wrappers `src/pages/[locale]/` (finos) reusando as páginas-raiz, gerando `pt`/`es` (mesmo padrão do `.dev`, incluindo `[locale]/rss.xml.ts`).
- Conteúdo: bio/CV por locale (curtos), posts/projetos compartilhados com chrome traduzido (traduzir depois).

### 5. Conteúdo inicial
- `bio`/Sobre pessoal (3 idiomas), destacando que é o lado pessoal e linkando o `.dev`.
- Projeto **asciimark** em destaque (descrição + link repo/site) na seção Portfólio.
- 1 post pessoal de exemplo; CV placeholder.

### 6. Cross-link
- `.com` → nav + rodapé apontando `https://djalmajr.dev`.
- `.dev` → adicionar link "Pessoal → djalmajr.com" (Header + Footer). Branch + PR no repo `.dev`.

### 7. Infra de deploy
- `wrangler.toml` (`name = "djalmajr-com"`, `pages_build_output_dir = "dist"`).
- `.github/workflows/`: `ci.yml` (lint/format/build em bun), `gitleaks.yml`, `deploy.yml` (push main → wrangler-action → Pages, gated no token).
- `.gitignore`: incluir `.tmp/`.

### 8. GitHub + Cloudflare (exigem autorização)
- Criar repo público `djalmajr/djalmajr.com`, push, homepage `https://djalmajr.com`.
- Secrets `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID` (reuso do `~/.zshrc`/conta).
- `npx wrangler pages project create djalmajr-com` + primeiro deploy (autorizado).
- Custom domain `djalmajr.com` no Pages (passo de dashboard/DNS — você).

## Verificação
- `bun run build` + `astro check` + `lint` limpos.
- `/`, `/pt/`, `/es/` renderizam; UI traduzida; cross-links funcionam; asciimark aparece no portfólio.
- `hreflang`/sitemap; deploy live em `djalmajr-com.pages.dev` e (após domínio) `djalmajr.com`.

## Riscos
- i18n neste template é do zero (páginas não são locale-aware) — mais edições que no `.dev`; validado por build.
- Layout com sidebar (diferente do `.dev`) — adaptar strings e links com cuidado.
