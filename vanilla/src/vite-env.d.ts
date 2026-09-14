/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DIYWB_API_KEY?: string;
  readonly VITE_DIYWB_SHORT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
