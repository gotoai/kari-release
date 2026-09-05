import React from "react";
import Translate from "@docusaurus/Translate";
import Logo from "@site/assets/images/gotoai-logo-main.svg";
import styles from "./styles.module.css";

/**
 * The attribution line shown directly under every page title.
 * Japanese is the source text; English lives in
 * docs/current/i18n/en_us/code.json (regenerate with
 * `pnpm write-translations --locale en`).
 */
export default function Attribution(): React.JSX.Element {
  const year = new Date().getFullYear();
  return (
    <p className={styles.attribution}>
      <span className={styles.group}>
        <Translate id="kari.attribution.copyright" description="Copyright prefix, followed by the year">
          Copyright ©
        </Translate>{" "}
        {year}
        <Logo className={styles.logo} aria-hidden="true" />
        <a href="https://gotoai.com/">
          <Translate id="kari.attribution.company" description="Company name in the attribution line">
            GotoAI株式会社
          </Translate>
        </a>
      </span>
      <span className={styles.group}>
        <Translate
          id="kari.attribution.basedOn"
          description="Attribution to the upstream project; {goose} is a link"
          values={{
            goose: <a href="https://aaif.io/projects/goose">goose</a>,
          }}
        >
          {"{goose}プロジェクトに基く"}
        </Translate>
      </span>
    </p>
  );
}
