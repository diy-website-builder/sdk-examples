# Vue example

Vite + Vue 3 host with a small `DiywbEditor` component that mounts and destroys the SDK correctly.

```bash
cd vue
cp .env.example .env
# edit .env with your API key
npm install
npm run dev
```

Default port is `5175`. Allow that origin on your API key if you use domain allowlisting.

The host stays at `/` even when in-canvas links use project page paths such as `/launch-kit`.
