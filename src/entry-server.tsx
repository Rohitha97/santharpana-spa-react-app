import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import App from "./App";

/**
 * Re-exported so scripts/prerender.mjs has a single compiled module to import.
 * The SSR build bundles everything reachable from this file, so pulling the
 * config in here avoids compiling src/config/*.ts a second time just to read it.
 */
export { prerenderPages, pages, schemaFor } from "./config/seo";
export { site } from "./config/site";

/** A route that never settles would otherwise hang the whole build. */
const RENDER_TIMEOUT_MS = 20_000;

/**
 * Renders one route to a complete HTML string for scripts/prerender.mjs.
 *
 * renderToPipeableStream is used rather than renderToString because the route
 * components are React.lazy: renderToString would emit the Suspense fallback
 * (the loading screen) instead of the page. `onAllReady` waits for every lazy
 * chunk to resolve, so what lands in the file is the finished page.
 */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    let settled = false;

    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fn();
    };

    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    sink.on("finish", () => finish(() => resolve(html)));

    const { pipe, abort } = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          pipe(sink);
        },
        onError(error) {
          finish(() => reject(error));
        },
      }
    );

    const timer = setTimeout(() => {
      abort();
      if (!settled) {
        settled = true;
        reject(new Error(`Timed out rendering ${url}`));
      }
    }, RENDER_TIMEOUT_MS);
  });
}
