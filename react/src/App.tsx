import { DiywbEditor } from "./DiywbEditor";

const apiKey = import.meta.env.VITE_DIYWB_API_KEY;
/** Map this to your end user (account id, tenant id, etc.). */
const shortId = import.meta.env.VITE_DIYWB_SHORT_ID ?? "demo-site";

export function App() {
  if (!apiKey) {
    return (
      <p className="error">
        Set <code>VITE_DIYWB_API_KEY</code> in <code>.env</code> (see{" "}
        <code>.env.example</code>).
      </p>
    );
  }

  return (
    <div className="shell">
      <header className="shell-header">
        <div>
          <h1>Acme · Website</h1>
          <p>React host for `@diy-website-builder/sdk`</p>
        </div>
      </header>
      <DiywbEditor
        apiKey={apiKey}
        shortId={shortId}
        exitURL="/"
        onPublish={(url) => console.log("published", url)}
      />
    </div>
  );
}
