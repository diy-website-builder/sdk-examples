# Vanilla example

Vite + TypeScript host that mounts `DIYWebsiteBuilderEditor.Builder` into a div.

```bash
cd vanilla
cp .env.example .env
# edit .env with your API key
npm install
npm run dev
```

Open `http://localhost:5173`. The host stays at `/` even when in-canvas links use project page paths such as `/launch-kit`. Allow that origin on your API key if you use domain allowlisting.
