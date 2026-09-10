import React, { createContext, useContext, useEffect, useState } from "react";
import Tabs from "@theme/Tabs";
import Translate from "@docusaurus/Translate";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import styles from "./styles.module.css";

/**
 * The download section of the quickstart, as two pieces the page composes:
 *
 *   <DownloadTabs>            one tab per platform; the tab bodies are written
 *     <TabItem value="windows" label="Windows">   in Markdown on the page
 *       <DownloadCard platform="windows" />       the card with mark, versions,
 *       ...steps and screenshots in Markdown...   button and signing status
 *     </TabItem>
 *   </DownloadTabs>
 *
 * DownloadTabs adds the platform mark to each tab label and selects the
 * visitor's own platform once the page is live in the browser; the matching
 * card shows a badge. The server-rendered page starts on the first tab.
 *
 * Downloads go through download.kari.gotoai.com, a counted 302 to the GitHub
 * release asset. Clicking a button first probes that server with a HEAD
 * request (which the server redirects but does not count); if it does not
 * answer within PROBE_TIMEOUT_MS, the browser is sent to the GitHub asset
 * directly. Either way the card then shows a line with the direct link,
 * since a page cannot observe whether a download started.
 *
 * Japanese is the source text; English lives in
 * docs/current/i18n/en_us/code.json under the `kari.download.*` ids.
 */

// Counted download names, resolved by kari-license-manager's
// config/download_mapping.yml.
// const WINDOWS_DOWNLOAD_URL = "https://download.kari.gotoai.com/KariSetup-latest-x64.exe";
const MACOS_SILICON_DOWNLOAD_URL = "https://download.kari.gotoai.com/Kari-latest-arm64.dmg";
const MACOS_INTEL_DOWNLOAD_URL = "https://download.kari.gotoai.com/Kari-latest-x64.dmg";
const LINUX_DOWNLOAD_URL = "https://download.kari.gotoai.com/kari_latest.deb";

// Fallback: the release assets themselves. Must name the same files the
// `latest` lines of download_mapping.yml point at; update both on a release.
const GITHUB_RELEASE_URL = "https://github.com/gotoai/kari-release/releases/download/v0.5.0-beta/";
// const WINDOWS_FALLBACK_URL = `${GITHUB_RELEASE_URL}KariSetup-0.5.0-beta-x64.exe`;
const MACOS_SILICON_FALLBACK_URL = `${GITHUB_RELEASE_URL}Kari-0.5.0-beta-arm64.dmg`;
const MACOS_INTEL_FALLBACK_URL = `${GITHUB_RELEASE_URL}Kari-0.5.0-beta-x64.dmg`;
const LINUX_FALLBACK_URL = `${GITHUB_RELEASE_URL}kari_0.5.0~beta_amd64.deb`;

// How long the download server gets to answer the probe before the button
// falls back to GitHub. Only the failure path waits this long.
const PROBE_TIMEOUT_MS = 3000;

export type Platform = "windows" | "macos" | "linux";

interface DownloadLink {
  label: string;
  /** Omitted while the build is not published: the button renders disabled. */
  href?: string;
  /** Direct link to the release asset, used when `href` does not answer. */
  fallback?: string;
}

const DOWNLOADS: Record<Platform, DownloadLink[]> = {
  // Windows is in preparation: no href, so the card shows a disabled button.
  // windows: [{ label: "Windows (x64)", href: WINDOWS_DOWNLOAD_URL, fallback: WINDOWS_FALLBACK_URL }],
  windows: [{ label: "Windows (x64)" }],
  macos: [
    { label: "Apple Silicon", href: MACOS_SILICON_DOWNLOAD_URL, fallback: MACOS_SILICON_FALLBACK_URL },
    { label: "Intel", href: MACOS_INTEL_DOWNLOAD_URL, fallback: MACOS_INTEL_FALLBACK_URL },
  ],
  linux: [{ label: "deb (x86_64)", href: LINUX_DOWNLOAD_URL, fallback: LINUX_FALLBACK_URL }],
};

const ICONS: Record<Platform, React.ReactNode> = {
  windows: <FaWindows />,
  macos: <FaApple />,
  linux: <FaLinux />,
};

const NAMES: Record<Platform, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

const TEXT: Record<Platform, { requirements: React.ReactNode; note: React.ReactNode }> = {
  windows: {
    requirements: (
      <Translate id="kari.download.windows.requirements" description="Supported Windows versions">
        Windows 10 / 11（64bit）
      </Translate>
    ),
    note: (
      <Translate id="kari.download.windows.note" description="Signing status of the Windows installer">
        {/* Azure により署名済み */}
        準備中
      </Translate>
    ),
  },
  macos: {
    requirements: (
      <Translate id="kari.download.macos.requirements" description="Supported macOS versions">
        macOS 12 以降（Apple Silicon / Intel）
      </Translate>
    ),
    note: (
      <Translate id="kari.download.macos.note" description="Signing status of the macOS build">
        Apple により署名・公証済み
      </Translate>
    ),
  },
  linux: {
    requirements: (
      <Translate id="kari.download.linux.requirements" description="Supported Linux targets">
        x86_64 ・ deb
      </Translate>
    ),
    note: (
      <Translate id="kari.download.linux.note" description="Signing status of the Linux build">
        DEB パッケージ
      </Translate>
    ),
  },
};

function detectPlatform(): Platform | null {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS/i.test(ua)) return "macos";
  if (/Linux|X11/i.test(ua)) return "linux";
  return null;
}

/**
 * True when the download server answers the probe in time. A HEAD is
 * redirected but not counted by the server, so this costs nothing in the
 * census. `no-cors` needs no CORS headers on the server: any answer comes
 * back as an `opaque` response, while a server that is down, unreachable or
 * slower than the timeout rejects. (Verified in Chromium: the spec forbids
 * `no-cors` with a non-`follow` redirect mode, and `cors` would need an
 * Access-Control-Allow-Origin header, so this cannot tell a 302 from a 404.
 * A 404 there is a mapping mistake, not an outage, and stays visible.)
 */
async function serverReachable(url: string): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);
  try {
    await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

const CurrentPlatform = createContext<Platform | null>(null);

export function DownloadCard({ platform }: { platform: Platform }): React.JSX.Element {
  const current = useContext(CurrentPlatform) === platform;
  const links = DOWNLOADS[platform];
  // The link whose download was last started from this card, for the
  // "if it does not begin" line underneath the buttons.
  const [started, setStarted] = useState<DownloadLink | null>(null);

  async function start(link: DownloadLink): Promise<void> {
    const primary = link.href!;
    const target = !link.fallback || (await serverReachable(primary)) ? primary : link.fallback;
    setStarted(link);
    window.location.assign(target);
  }

  function onClick(link: DownloadLink, event: React.MouseEvent<HTMLAnchorElement>): void {
    // Leave modified clicks (new tab, copy link) to the browser.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    void start(link);
  }

  return (
    <div className={`${styles.card} ${current ? styles.cardCurrent : ""}`}>
      {current && (
        <span className={styles.badge}>
          <Translate id="kari.download.badge.current" description="Badge on the download card matching the visitor's platform">
            お使いの環境
          </Translate>
        </span>
      )}
      <div className={styles.icon} aria-hidden="true">
        {ICONS[platform]}
      </div>
      <div className={styles.name}>{NAMES[platform]}</div>
      <div className={styles.requirements}>{TEXT[platform].requirements}</div>
      <div className={styles.buttons}>
        {links.map((link) => {
          const label = (
            <>
              <Translate id="kari.download.button" description="Label of the download button">
                ダウンロード
              </Translate>
              {links.length > 1 && <span className={styles.buttonSub}>{link.label}</span>}
            </>
          );
          // No href means the build is not published yet: a gray, inert
          // button that screen readers announce as disabled.
          if (!link.href) {
            return (
              <span
                key={link.label}
                className={`${styles.button} ${styles.buttonDisabled}`}
                role="button"
                aria-disabled="true"
              >
                {label}
              </span>
            );
          }
          return (
            <a key={link.label} className={styles.button} href={link.href} onClick={(e) => onClick(link, e)}>
              {label}
            </a>
          );
        })}
      </div>
      {started && (
        <div className={styles.status} role="status">
          <Translate
            id="kari.download.started"
            description="Line shown under the buttons after a download was started; {link} is the direct link to the file"
            values={{
              link: (
                <a href={started.fallback ?? started.href}>
                  <Translate id="kari.download.started.link" description="Link text inside kari.download.started">
                    こちら
                  </Translate>
                </a>
              ),
            }}
          >
            {"ダウンロードを開始しました。始まらない場合は {link} をクリックしてください。"}
          </Translate>
        </div>
      )}
      <div className={styles.note}>{TEXT[platform].note}</div>
    </div>
  );
}

function labelWithIcon(platform: Platform, text: React.ReactNode): string {
  // Tabs renders the label as a plain child, so a node works; only the
  // declared type is narrower than that.
  return (
    <span className={styles.tabLabel}>
      {ICONS[platform]}
      {text}
    </span>
  ) as unknown as string;
}

export default function DownloadTabs({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [platform, setPlatform] = useState<Platform | null>(null);
  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const items = React.Children.map(children, (child) => {
    if (!React.isValidElement<{ value: Platform; label?: React.ReactNode }>(child)) return child;
    const { value, label } = child.props;
    return React.cloneElement(child, { label: labelWithIcon(value, label ?? NAMES[value]) });
  });

  return (
    <CurrentPlatform.Provider value={platform}>
      {/* Keyed so detection remounts the tabs with the new default. */}
      <React.Fragment key={platform ?? "server"}>
        <Tabs groupId="os" defaultValue={platform ?? "windows"}>
          {items}
        </Tabs>
      </React.Fragment>
    </CurrentPlatform.Provider>
  );
}
