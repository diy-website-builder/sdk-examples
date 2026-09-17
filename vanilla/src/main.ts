import DIYWebsiteBuilderEditor from "@diy-website-builder/sdk";
import { keepHostAtRoot } from "./keepHostAtRoot";

keepHostAtRoot();

const apiKey = import.meta.env.VITE_DIYWB_API_KEY as string | undefined;
/** Map this to your end user (account id, tenant id, etc.). */
const shortId =
  (import.meta.env.VITE_DIYWB_SHORT_ID as string | undefined) ?? "demo-site";

const container = document.getElementById("editor");

if (!container) {
  throw new Error("Missing #editor mount node");
}

if (!apiKey) {
  container.innerHTML =
    '<p class="error">Set <code>VITE_DIYWB_API_KEY</code> in <code>.env</code> (see <code>.env.example</code>).</p>';
} else {
  const editor = new DIYWebsiteBuilderEditor.Builder({
    apiKey,
    shortId,
    container,
    exitURL: "/",
    onPublish: (url) => {
      console.log("published", url);
    },
  });

  window.addEventListener("beforeunload", () => {
    editor.destroy();
  });
}
