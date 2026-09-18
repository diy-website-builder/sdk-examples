# SDK examples

Runnable starters for [`@diy-website-builder/sdk`](https://www.npmjs.com/package/@diy-website-builder/sdk).

Docs: [Framework examples](https://diy-website-builder.com/docs/editor-sdk/framework-examples).

| Folder                 | Stack                     |
| ---------------------- | ------------------------- |
| [`vanilla`](./vanilla) | Vite + TypeScript         |
| [`cdn`](./cdn)         | Plain HTML + jsDelivr UMD |
| [`react`](./react)     | Vite + React              |
| [`vue`](./vue)         | Vite + Vue 3              |
| [`angular`](./angular) | Angular 19 standalone     |
| [`next`](./next)       | Next.js App Router        |

## Before you run

1. Create an API key at [developer/keys](https://diy-website-builder.com/developer/keys).
2. Set your API key: copy `.env.example` to `.env` for Vite/Next examples, edit `src/env.ts` for Angular, or edit `index.html` for CDN.
3. Choose a stable `shortId` you map to your end user (for example their account id). DIYWB uses that id as the site identity.
4. Optionally restrict the key to your local origin (`http://localhost:5180`, `http://localhost:5176`, `http://localhost:3000`, and so on).

## Install and run

Each example depends on the published package [`@diy-website-builder/sdk`](https://www.npmjs.com/package/@diy-website-builder/sdk) (`^3.2.16`).

```bash
git clone https://github.com/diy-website-builder/sdk-examples.git
cd sdk-examples/vanilla   # or cdn / react / vue / angular / next
cp .env.example .env      # next: .env.local · skip for angular/cdn
# angular: edit src/env.ts · cdn: edit index.html
npm install               # skip for cdn
npm run dev               # cdn: npx serve -p 5177
```

## Export mode

To export HTML instead of DIY hosted publish, pass:

```ts
publishMode: "export",
onExport: async (site) => {
  // site.pages[].html is ready to host
},
```

See the package [README on npm](https://www.npmjs.com/package/@diy-website-builder/sdk#export-html-to-your-host) for CSP notes and plan limits.
