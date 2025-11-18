import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import { Nav } from "~/components/nav/nav";

/**
 * Sets cache headers for route assets.
 */
export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

// PUBLIC_INTERFACE
export default component$(() => {
  /**
   * Root layout wraps every page with global styles and sticky navigation.
   * It provides the primary content landmark.
   */
  useStyles$(styles);
  return (
    <>
      <header role="banner">
        <Nav />
      </header>
      <main id="main-content" role="main" tabIndex={-1}>
        <Slot />
      </main>
      <footer role="contentinfo">
        <div class="container" style="padding-top:1rem">
          <small>© {new Date().getFullYear()} My Portfolio. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
});
