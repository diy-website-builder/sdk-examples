# Angular example

Angular 19 (standalone) host with a small `DiywbEditorComponent` that mounts and destroys the SDK correctly.

```bash
cd angular
# set DIYWB_API_KEY in src/env.ts (see .env.example)
npm install
npm run dev
```

Default port is `5176`. Allow that origin on your API key if you use domain allowlisting.

The host stays at `/` even when in-canvas links use project page paths such as `/launch-kit`.
