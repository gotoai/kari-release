# Setting up the Kari docs repository

This repository holds the end-user documentation for Kari and, through GitHub
Releases, the binary downloads. The documentation is a
[Docusaurus](https://docusaurus.io/) site, written in Japanese first and
translated to English, and published to GitHub Pages.

This memo is for maintainers: how to get a working copy on a local machine,
run the site, and understand the folder layout. It is not user documentation.

Verified on macOS with Node 26.8 and pnpm 11.25 (2026-09-05).

---

## 1. Prerequisites

Two tools, installed once per machine:

| Tool | Why | Install (macOS) |
| --- | --- | --- |
| Node.js 20 or newer | Runs Docusaurus | `brew install node` |
| pnpm 10 or newer | Installs the site's packages | `brew install pnpm` |

Homebrew itself comes from <https://brew.sh> if it is missing. On Windows or
Linux use the installers from <https://nodejs.org> and <https://pnpm.io>; the
rest of this memo is identical.

There is no per-project environment to create. Node's equivalent of a Python
`.venv` is the `node_modules/` folder that `pnpm install` creates inside the
repository, and it is already gitignored.

## 2. Clone and install

```bash
git clone https://github.com/gotoai/kari-release.git
cd kari-release
pnpm install
```

`pnpm install` reads `pnpm-lock.yaml` and reproduces the exact dependency
tree. Re-run it after pulling a change to `package.json` or the lockfile.

**Note on pnpm 10+.** pnpm refuses to run any script while a dependency's
install script is neither approved nor denied, and it re-checks before every
`pnpm <script>`. The decision lives in `pnpm-workspace.yaml` under
`allowBuilds`. If a new dependency ever triggers the message
`Ignored build scripts: <package>`, decide with:

```bash
pnpm approve-builds '!<package>'   # deny (the usual answer)
pnpm approve-builds '<package>'    # allow, only if the package needs it
```

and commit the updated `pnpm-workspace.yaml`.

## 3. Run the site locally

```bash
pnpm start                 # Japanese, live reload, http://localhost:3000
pnpm start --locale en     # English, live reload (run separately)
pnpm build                 # both locales into build/
pnpm serve                 # serve build/ at http://localhost:3000
```

Use `pnpm start` while writing. It rebuilds on save, but serves **one locale
at a time**, so the language switcher does nothing useful there.

Use `pnpm build && pnpm serve` before pushing. It is the same output GitHub
Pages will serve, with both locales, the language switcher, and (later) the
version dropdown all working. The build **fails on any broken internal
link**; treat a green build as the link check.

Add `--host 0.0.0.0` to `pnpm serve` to open the site from a phone on the
same network.

Node 26 prints an `ExperimentalWarning` about `localStorage` during builds.
It is harmless.

## 4. Folder layout

```
kari-release/
├── docs/
│   └── current/                    the docs being written now
│       ├── main/                   Japanese pages — the source of truth
│       │   └── quickstart.md
│       └── i18n/
│           ├── ja_jp -> ../main    symlink: Japanese, browsable beside en_us
│           └── en_us/
│               ├── code.json                        React-side UI strings
│               ├── docusaurus-theme-classic/        navbar / footer labels
│               │   ├── navbar.json
│               │   └── footer.json
│               └── docusaurus-plugin-content-docs/
│                   ├── current.json                 version label
│                   └── current/
│                       └── quickstart.md            English page
├── assets/images/                  images imported by components (logo)
├── src/
│   ├── components/Attribution/     copyright + goose line under every h1
│   ├── theme/Heading/              wrapper that appends Attribution to h1
│   └── css/custom.css              theme overrides (Japanese font stack)
├── static/                         copied verbatim to the site root
│   ├── CNAME                       custom domain for GitHub Pages
│   ├── .nojekyll
│   └── img/favicon.ico
├── docusaurus.config.ts            site, locale and plugin configuration
├── sidebars.ts                     sidebar, auto-generated from docs/current/main
├── .github/workflows/pages.yml     build + deploy on push to main
├── package.json  pnpm-lock.yaml  pnpm-workspace.yaml  tsconfig.json
└── SETUP-REPO.md                   this memo
```

### How the locales map to URLs

| Locale | Folder | URL |
| --- | --- | --- |
| Japanese (default) | `docs/current/main/` | `/quickstart` … served at the root |
| English | `docs/current/i18n/en_us/docusaurus-plugin-content-docs/current/` | `/en/quickstart` |

The folder names `ja_jp` and `en_us` are set by `localeConfigs[..].path` in
`docusaurus.config.ts`. The URL segments stay `ja` and `en` because
Docusaurus validates locale codes with `Intl.Locale`, which rejects
underscores. Do not rename the codes; rename the folders if you must.

### The `ja_jp` symlink

`docs/current/i18n/ja_jp` is a symbolic link to `docs/current/main`. It exists so
that both languages can be found under `docs/current/i18n/`, for example by a script comparing
translation freshness. Docusaurus reads the Japanese pages from `docs/current/main`
directly and never needs the link.

Two consequences:

- Edit Japanese pages in `docs/current/main/`. Editing through the link changes the
  same file, so either path works, but keep commits and links pointing at
  `docs/current/main/` to avoid confusion.
- **Do not run `pnpm write-translations --locale ja`.** It would write JSON
  files into `docs/current/main/` through the link. Japanese UI labels come straight
  from `docusaurus.config.ts`, so it is never needed.

Git stores the link as a link. On Windows, clone with symlinks enabled
(`git clone -c core.symlinks=true …`, which needs Developer Mode) or the link
appears as a plain text file. Nothing breaks in that case; only the alias is
lost.

## 5. Writing and translating pages

1. Write or edit the Japanese page under `docs/current/main/`. Frontmatter controls
   ordering and naming:

   ```yaml
   ---
   sidebar_position: 1        # order in the sidebar
   slug: /                    # URL; omit to use the file name
   title: 5分で分かるKari      # page title
   sidebar_label: クイックスタート   # shorter label for the sidebar
   description: …             # meta description, used by search engines
   ---
   ```

2. Copy it to the same relative path under
   `docs/current/i18n/en_us/docusaurus-plugin-content-docs/current/` and translate.
   Keep the frontmatter keys; translate their values.

3. A page missing on the English side falls back to the Japanese one, so
   English can lag without breaking the site.

Every `.md` file is treated as MDX. Raw HTML works but attributes must be
JSX-style (`allowFullScreen`, `frameBorder`, `style={{ … }}`), and anything
that looks like a JSX tag must be closed. A stray `<` in prose breaks the
build; write `&lt;` or wrap it in backticks.

### The attribution line under each title

Every page shows `Copyright © <year> [logo] GotoAI株式会社  gooseプロジェクトに基く`
directly under its `h1`. It is `src/components/Attribution`, attached by a
wrapper around the theme's `Heading` component (`src/theme/Heading`), so it
appears whether the title comes from frontmatter or from a markdown `#` line.
Size and weight are in `styles.module.css` next to the component; the same
text also sits in the footer, configured in `docusaurus.config.ts`.

Its English wording is in `docs/current/i18n/en_us/code.json` under the
`kari.attribution.*` keys. The footer's English copy is in `footer.json`.

When a navbar or footer label, or a string inside a component, changes,
regenerate the English string files and translate the new entries:

```bash
pnpm write-translations --locale en
```

This adds new keys to the JSON files under `docs/current/i18n/en_us/` and leaves
existing translations alone.

## 6. Deploying

`.github/workflows/pages.yml` builds the site on every push to `main` that
touches site files, and publishes it with GitHub's Pages actions. One-time
setup on GitHub:

1. Repository → Settings → Pages → Source: **GitHub Actions**.
2. Under Custom domain, enter the hostname from `static/CNAME` and tick
   Enforce HTTPS once the certificate is issued.
3. At the DNS provider, add a `CNAME` record for that hostname pointing to
   `gotoai.github.io`.

Until the custom domain resolves, the site is only reachable at
`https://gotoai.github.io/kari-release/`, and a build made for `/` will show
no styling there. To preview that layout locally:

```bash
TARGET_PATH=/kari-release/ pnpm build && pnpm serve
```

Changing the hostname later means editing three places: `url` in
`docusaurus.config.ts`, `static/CNAME`, and the Pages setting.

A push to any branch other than `main` never deploys. Opening a pull request
is a safe way to have GitHub run the build without publishing.

## 7. Versions (not yet enabled)

`docs/current/` is the working copy. The intent is that a frozen major
release gets a sibling folder, for example `docs/1.x/main` and
`docs/1.x/i18n`, when Kari 1.0 ships.

Docusaurus's own versioning command does **not** write there. Running

```bash
pnpm docusaurus docs:version 1.x
```

snapshots `docs/current/main/` into `versioned_docs/version-1.x/` at the
repository root, records the name in `versions.json`, and expects the English
snapshot at `docs/current/i18n/en_us/docusaurus-plugin-content-docs/version-1.x/`.
Those two locations are fixed by the docs plugin and cannot be pointed at
`docs/1.x/`.

Two ways to reconcile that with the `docs/<version>/` layout, to be decided
when the first version is cut:

- **Symlinks, as with `ja_jp`.** Keep the real files in `docs/1.x/main` and
  `docs/1.x/i18n/en_us/...`, and link `versioned_docs/version-1.x` and the
  `version-1.x` translation folder to them. Same trade-offs as the existing
  link: fine on macOS, Linux and in CI, loses the alias on a Windows clone
  without symlink support.
- **Accept the Docusaurus folders.** Let `versioned_docs/` and
  `docs/current/i18n/en_us/.../version-1.x/` hold the snapshots and treat
  `docs/<version>/` as a naming idea that was not needed.

Either way, each snapshot doubles the translation surface, so version by
major release only and keep at most the current and previous major.
