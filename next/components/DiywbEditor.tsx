"use client";

import { useEffect, useRef } from "react";
import DIYWebsiteBuilderEditor from "@diy-website-builder/sdk";

type DiywbEditorProps = {
  apiKey: string;
  shortId: string;
  exitURL?: string;
  onPublish?: (url?: string) => void;
};

/**
 * Client-only mount for the SDK. Always destroy on unmount so Next route
 * changes do not leave orphan editor UI in the DOM.
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

    const editor = new DIYWebsiteBuilderEditor.Builder({
      apiKey,
      shortId,
      container,
      exitURL,
      onPublish: (url) => onPublishRef.current?.(url),
    });

    return () => {
      editor.destroy();
    };
  }, [apiKey, shortId, exitURL]);

  return <div ref={containerRef} className="editor-mount" />;
}
