import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;

const tree = (
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

/**
 * `npm run build` prerenders every route to static HTML, so in production there
 * is markup here to hydrate. `npm run dev` serves the bare index.html shell, and
 * hydrating an empty container throws — hence the branch.
 *
 * The test is firstElementChild, not hasChildNodes: the shell still contains the
 * `<!--app-html-->` marker comment, which counts as a child node and made dev
 * take the hydrate path against an empty root on every page load.
 */
if (container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
