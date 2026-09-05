import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kari",
  tagline: "手元のファイルと一緒に働く AI アシスタント",
  favicon: "img/favicon.ico",

  // Production URL. Change here (and in static/CNAME) if the hostname changes.
  url: "https://documents.kari.gotoai.com",
  // "/" assumes a custom domain. Without one, a GitHub project site lives at
  // https://gotoai.github.io/kari-release/ and needs baseUrl "/kari-release/".
  baseUrl: process.env.TARGET_PATH || "/",

  organizationName: "gotoai",
  projectName: "kari-release",

  onBrokenLinks: "throw",
  markdown: {
    hooks: { onBrokenMarkdownLinks: "warn" },
  },

  // Japanese is the default locale and is served without a URL prefix;
  // English lives under /en/. Underscore codes such as ja_jp are rejected by
  // Intl.Locale, which Docusaurus uses internally, so keep hyphenated tags.
  //
  // Folder layout (see SETUP-REPO.md):
  //   docs/current/main/          Japanese source pages (default locale)
  //   docs/current/i18n/en_us/    English translations + UI strings
  //   docs/current/i18n/ja_jp -> ../main  symlink, so both languages are
  //                               browsable side by side under i18n/
  // `path` below names the folder; the locale code stays the URL segment.
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    path: "docs/current/i18n",
    localeConfigs: {
      ja: { label: "日本語", htmlLang: "ja-JP", path: "ja_jp" },
      en: { label: "English", htmlLang: "en-US", path: "en_us" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs/current/main",
          // Docs are the whole site: /quickstart, later /1.x/..., /en/...
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // No "edit this page" link: this is product documentation, not a
          // community wiki. The last-updated date stays; it is read from git at
          // build time (dev mode shows a fake placeholder date on purpose).
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: "Kari",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "ドキュメント",
        },
        { type: "localeDropdown", position: "right" },
        {
          href: "https://github.com/gotoai/kari-release/releases",
          label: "ダウンロード",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Kari",
          items: [
            { label: "ダウンロード", href: "https://github.com/gotoai/kari-release/releases" },
            { label: "不具合報告・要望", href: "https://github.com/gotoai/kari-release/issues" },
            { label: "GotoAI", href: "https://gotoai.com/" },
          ],
        },
      ],
      // Shown on every page. The English version lives in
      // docs/current/i18n/en_us/docusaurus-theme-classic/footer.json.
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://gotoai.com/">GotoAI株式会社</a>&emsp;&emsp;<a href="https://aaif.io/projects/goose">goose</a>プロジェクトに基く`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
