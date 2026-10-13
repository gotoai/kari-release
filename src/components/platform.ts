/**
 * Which machine the visitor is reading from.
 *
 * Mobile is tested FIRST and on its own patterns, because the desktop tests
 * cannot be relied on to miss a phone: an iPhone user agent contains
 * "like Mac OS X", so a bare /Mac OS/ test badged the macOS card for every
 * iOS visitor, and an Android one contains "Linux", which badged the Linux
 * card and its `sudo dpkg -i` steps. iPadOS reports "Macintosh" / "MacIntel"
 * and is only distinguishable by maxTouchPoints.
 *
 * Kari has no mobile build, so a phone or tablet gets no platform at all: no
 * tab is preselected, no card is badged, and MobileNotice says why. The same
 * reasoning and the same patterns run on the product page at
 * gotoai.com/ai-products/kari-jp/ — keep the two in step.
 *
 * Browser only: every caller runs this from an effect, never during the
 * server render.
 */

export type Platform = "windows" | "macos" | "linux";

export interface Device {
  /** The desktop platform to offer, or null on mobile and when unknown. */
  platform: Platform | null;
  /** A phone or tablet, which Kari does not support. */
  mobile: boolean;
}

const MOBILE: Device = { platform: null, mobile: true };

export function detectDevice(): Device {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = nav.userAgent || "";
  const plat = nav.userAgentData?.platform || nav.platform || "";
  const touch = nav.maxTouchPoints || 0;

  if (/iPhone|iPod/.test(ua)) return MOBILE;
  if (/iPad/.test(ua) || (/Macintosh|MacIntel/.test(`${plat} ${ua}`) && touch > 1)) return MOBILE;
  if (/Android/i.test(ua)) return MOBILE;
  if (/Windows Phone|IEMobile|BlackBerry|Opera Mini/i.test(ua)) return MOBILE;

  if (/Win/i.test(plat) || /Windows/i.test(ua)) return { platform: "windows", mobile: false };
  if (/Mac/i.test(plat) || /Mac OS X/.test(ua)) return { platform: "macos", mobile: false };
  if (/Linux|X11|CrOS/i.test(`${plat} ${ua}`)) return { platform: "linux", mobile: false };
  return { platform: null, mobile: false };
}
