# Next.js example

App Router host. The SDK touches `document` at import time, so the editor is loaded with `next/dynamic` (`ssr: false`) and a client-only `import()` inside `useEffect`.

```bash
cd next
cp .env.example .env.local
# edit .env.local with your API key
npm install
npm run dev
```

Open `http://localhost:3000`. Allow that origin on your API key if you use domain allowlisting.

`NEXT_PUBLIC_*` values are available in the browser. Restrict the key with domain allowlisting for production.
