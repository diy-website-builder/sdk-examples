import { useEffect, useRef } from "react";
import DIYWebsiteBuilderEditor from "@diy-website-builder/sdk";

type DiywbEditorProps = {
  apiKey: string;
  shortId: string;
  exitURL?: string;
  onPublish?: (url?: string) => void;
};

/**
 * Mounts the SDK into a DOM node and destroys it on unmount or identity change.
 * Client-only: do not render this during SSR.
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
