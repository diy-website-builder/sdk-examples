# React example

Vite + React host with a small `DiywbEditor` component that mounts and destroys the SDK correctly.

```bash
cd react
cp .env.example .env
# edit .env with your API key
npm install
npm run dev
```

Default port is `5174`. Allow that origin on your API key if you use domain allowlisting.

React Strict Mode remounts effects once in development. That is expected: the cleanup path calls `editor.destroy()`.
