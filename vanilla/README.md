# Vanilla example

Vite + TypeScript host that mounts `DIYWebsiteBuilderEditor.Builder` into a div.

```bash
# from src/editor
npm run build
cd examples/vanilla
cp .env.example .env
# edit .env with your API key
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`). Allow that origin on your API key if you use domain allowlisting.
