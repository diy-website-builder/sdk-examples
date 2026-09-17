"use client";

import { useEffect, useRef } from "react";

type DiywbEditorProps = {
  apiKey: string;
  shortId: string;
  exitURL?: string;
  onPublish?: (url?: string) => void;
};

/**
 * Client-only mount for the SDK. The package touches `document` at import
 * time, so it is loaded inside `useEffect` (never on the server). Always
 * destroy on unmount so Next route changes do not leave orphan editor UI.
 */
export function DiywbEditor({
  apiKey,
  shortId,
  exitURL,
  onPublish,
}: DiywbEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onPublishRef = useRef(onPublish);
  onPublishRef.current = onPublish;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let editor: { destroy: () => void } | undefined;

    void import("@diy-website-builder/sdk").then((mod) => {
      const DIYWebsiteBuilderEditor = mod.default;
      if (cancelled || !containerRef.current) return;

      editor = new DIYWebsiteBuilderEditor.Builder({
        apiKey,
        shortId,
        container: containerRef.current,
        exitURL,
        onPublish: (url) => onPublishRef.current?.(url),
      });
    });

    return () => {
      cancelled = true;
      editor?.destroy();
    };
  }, [apiKey, shortId, exitURL]);

  return <div ref={containerRef} className="editor-mount" />;
}
