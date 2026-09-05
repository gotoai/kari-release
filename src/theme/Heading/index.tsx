import React from "react";
import Heading from "@theme-original/Heading";
import type HeadingType from "@theme/Heading";
import type { WrapperProps } from "@docusaurus/types";
import Attribution from "@site/src/components/Attribution";

type Props = WrapperProps<typeof HeadingType>;

/**
 * Wraps the theme's Heading so that every h1 — whether Docusaurus renders it
 * from the frontmatter title or the page starts with a markdown "# " line —
 * is followed by the attribution line.
 */
export default function HeadingWrapper(props: Props): React.JSX.Element {
  if (props.as !== "h1") {
    return <Heading {...props} />;
  }
  return (
    <>
      <Heading {...props} />
      <Attribution />
    </>
  );
}
