import React, { useEffect, useState } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { detectDevice } from "@site/src/components/platform";
import styles from "./styles.module.css";

/**
 * Shown above the download tabs when the visitor is on a phone or tablet:
 * Kari is a desktop application and there is nothing here to install. The
 * button hands the page to a computer — the system share sheet where there
 * is one, otherwise the clipboard.
 *
 * Nothing renders during the server render, so the notice appears on
 * hydration. The pages are served statically from GitHub Pages, which cannot
 * vary the HTML by device; see the detection notes in ../platform.ts.
 *
 * The wording is the one already used on the product page at
 * gotoai.com/ai-products/kari-jp/. Japanese is the source text; English
 * lives in docs/current/i18n/en_us/code.json under `kari.mobile.*`.
 */
export default function MobileNotice(): React.JSX.Element | null {
  const [mobile, setMobile] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    setMobile(detectDevice().mobile);
  }, []);

  if (!mobile) return null;

  async function share(): Promise<void> {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
      } catch {
        // The visitor dismissed the share sheet; leave the button as it was.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
    } catch {
      window.prompt(url, url);
    }
  }

  return (
    <div className={styles.notice}>
      <p className={styles.title}>
        <Translate id="kari.mobile.title" description="Heading of the notice shown to phone and tablet visitors">
          Kari はパソコン向けのアプリです
        </Translate>
      </p>
      <p className={styles.body}>
        <Translate id="kari.mobile.body" description="Body of the notice shown to phone and tablet visitors">
          Kari は Windows / macOS / Linux のパソコンで動作するデスクトップアプリケーションです。iPhone・iPad・Android にはインストールできません。現在、モバイル版を提供しておりません。
        </Translate>
      </p>
      <p className={styles.hint}>
        <Translate id="kari.mobile.hint" description="Line telling the visitor to continue on a computer">
          このページのリンクをお使いのパソコンに送ると、そちらでダウンロードできます。
        </Translate>
      </p>
      <button type="button" className={styles.share} onClick={() => void share()}>
        {shared
          ? translate({
              id: "kari.mobile.share.done",
              description: "Button label after the page link was copied to the clipboard",
              message: "リンクをコピーしました",
            })
          : translate({
              id: "kari.mobile.share",
              description: "Label of the button that sends the page link to a computer",
              message: "パソコンに送る",
            })}
      </button>
    </div>
  );
}
