"use client";

import { DiywbEditor } from "@/components/DiywbEditor";

const apiKey = process.env.NEXT_PUBLIC_DIYWB_API_KEY;
/** Map this to your end user (account id, tenant id, etc.). */
const shortId = process.env.NEXT_PUBLIC_DIYWB_SHORT_ID ?? "demo-site";

export function WebsitePage() {
  if (!apiKey) {
    return (
      <p className="error">
        Set <code>NEXT_PUBLIC_DIYWB_API_KEY</code> in <code>.env.local</code>{" "}
        (see <code>.env.example</code>).
      </p>
    );
  }

  return (
    <div className="shell">
      <header className="shell-header">
        <div>
          <h1>Acme · Website</h1>
          <p>Next.js host for `@diy-website-builder/sdk`</p>
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
