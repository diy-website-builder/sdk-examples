<script setup lang="ts">
import DiywbEditor from "./DiywbEditor.vue";

const apiKey = import.meta.env.VITE_DIYWB_API_KEY;
/** Map this to your end user (account id, tenant id, etc.). */
const shortId = import.meta.env.VITE_DIYWB_SHORT_ID ?? "demo-site";

function onPublish(url?: string) {
  console.log("published", url);
}
</script>

<template>
  <p v-if="!apiKey" class="error">
    Set <code>VITE_DIYWB_API_KEY</code> in <code>.env</code> (see
    <code>.env.example</code>).
  </p>
  <div v-else class="shell">
    <header class="shell-header">
      <div>
        <h1>Acme · Website</h1>
        <p>Vue 3 host for `@diy-website-builder/sdk`</p>
      </div>
    </header>
    <DiywbEditor
      :api-key="apiKey"
      :short-id="shortId"
      exit-url="/"
      @publish="onPublish"
    />
  </div>
</template>
