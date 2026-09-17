# SDK examples

Runnable starters for [`@diy-website-builder/sdk`](https://www.npmjs.com/package/@diy-website-builder/sdk).

| Folder | Stack |
| --- | --- |
| [`vanilla`](./vanilla) | Vite + TypeScript |
| [`react`](./react) | Vite + React |
| [`vue`](./vue) | Vite + Vue 3 |
| [`next`](./next) | Next.js App Router |

## Before you run

1. Create an API key at [developer/keys](https://diy-website-builder.com/developer/keys).
2. Copy each example’s `.env.example` to `.env` and set the key.
3. Choose a stable `shortId` you map to your end user (for example their account id). DIYWB uses that id as the site identity.
4. Optionally restrict the key to your local origin (`http://localhost:5173`, `http://localhost:3000`, and so on).

## Install and run

Each example depends on the published package [`@diy-website-builder/sdk`](https://www.npmjs.com/package/@diy-website-builder/sdk) (`^3.2.4`).

```bash
git clone https://github.com/diy-website-builder/sdk-examples.git
cd sdk-examples/vanilla   # or react / vue / next
cp .env.example .env      # next: copy to .env.local
npm install
npm run dev
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
