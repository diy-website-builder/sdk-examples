<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import DIYWebsiteBuilderEditor from "@diy-website-builder/sdk";

const props = defineProps<{
  apiKey: string;
  shortId: string;
  exitUrl?: string;
}>();

const emit = defineEmits<{
  publish: [url?: string];
}>();

const containerRef = ref<HTMLDivElement | null>(null);
let editor: { destroy: () => void } | undefined;

function mountEditor() {
  editor?.destroy();
  editor = undefined;
  const container = containerRef.value;
  if (!container) return;

  editor = new DIYWebsiteBuilderEditor.Builder({
    apiKey: props.apiKey,
    shortId: props.shortId,
    container,
    exitURL: props.exitUrl,
    onPublish: (url) => emit("publish", url),
  });
}

onMounted(mountEditor);
watch(
  () => [props.apiKey, props.shortId, props.exitUrl] as const,
  () => mountEditor(),
);
onBeforeUnmount(() => {
  editor?.destroy();
  editor = undefined;
});
</script>

<template>
  <div ref="containerRef" class="editor-mount" />
</template>
