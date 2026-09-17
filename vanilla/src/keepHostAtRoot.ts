/**
 * Keep the Vite example host at `/`.
 *
 * In-canvas links use the project's published paths (for example `/launch-kit`).
 * Without this, those clicks navigate the browser away from the shell URL and a
 * refresh looks like the example "lives" on that deep path.
 */
export function keepHostAtRoot() {
  const sync = () => {
    if (window.location.pathname === "/") return;
    window.history.replaceState(
      window.history.state,
      "",
      `/${window.location.search}${window.location.hash}`,
    );
  };

  sync();

  window.addEventListener("popstate", sync);

  window.addEventListener(
    "click",
    (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") return;

      let url: URL;
      try {
        url = new URL(anchor.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === "/") return;

      event.preventDefault();
      sync();
    },
    true,
  );
}
