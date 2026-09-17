# Angular example

Angular 19 (standalone) host with a small `DiywbEditorComponent` that mounts and destroys the SDK correctly.

This example does **not** use a `.env` file. Set credentials in `src/env.ts`:

```ts
export const DIYWB_API_KEY = "YOUR_API_KEY";
export const DIYWB_SHORT_ID = "demo-site";
```

```bash
cd angular
# edit src/env.ts
npm install
npm run dev
```

Default port is `5176`. Allow that origin on your API key if you use domain allowlisting.

The host stays at `/` even when in-canvas links use project page paths such as `/launch-kit`.
