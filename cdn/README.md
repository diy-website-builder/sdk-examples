# CDN example

Single HTML file. No install, no bundler. Loads the UMD build from jsDelivr and mounts `DIYWebsiteBuilderEditor.Builder`.

1. Set `apiKey` (and optionally `shortId`) near the bottom of `index.html`.
2. Serve the folder over HTTP (browsers block some CDN + `file://` combinations):

```bash
cd cdn
npx --yes serve -p 5177
```

Open `http://localhost:5177`. Allow that origin on your API key if you use domain allowlisting.

Pin the SDK version in the script URL for production. unpkg works too:

`https://unpkg.com/@diy-website-builder/sdk@3.2.4/dist/diy-website-builder-editor.js`
