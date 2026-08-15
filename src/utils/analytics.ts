/**
 * Thin wrapper over gtag for the handful of actions worth counting.
 *
 * The site's only real conversions happen off-site — a WhatsApp chat or a phone
 * call — so without these events the analytics show traffic arriving and nothing
 * else. Every booking button on the site reports through here.
 *
 * Safe to call before gtag has loaded (it is injected on window `load`) and
 * during server rendering: both cases no-op rather than throw.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void;
  }
}

export type ContactEvent = "whatsapp_click" | "call_click" | "directions_click" | "review_click";

/**
 * @param event  what happened
 * @param params free-form detail — pass `treatment` where the button is tied to one
 */
export function track(event: ContactEvent, params?: GtagParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
