"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Plugin, PluginOnAnnotationLayerRender } from "@react-pdf-viewer/core";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface PdfModalProps {
  pdfDocument: { title: string; url: string } | null;
  onClose: () => void;
  closeAriaLabel?: string;
}

const PDF_WORKER_URL = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

function openLinksInNewTabPlugin(): Plugin {
  return {
    onAnnotationLayerRender(props: PluginOnAnnotationLayerRender) {
      const { container } = props;
      container.querySelectorAll<HTMLAnchorElement>('a[data-target="external"]').forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        link.addEventListener("click", (e) => {
          e.preventDefault();
          if (link.href) window.open(link.href, "_blank", "noopener,noreferrer");
        });
      });
    },
  };
}

export function PdfModal({
  pdfDocument,
  onClose,
  closeAriaLabel = "Close PDF viewer",
}: PdfModalProps) {
  const openLinksPlugin = openLinksInNewTabPlugin();

  useEffect(() => {
    if (!pdfDocument) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const scrollY = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.position = "fixed";
    document.documentElement.style.top = `-${scrollY}px`;
    document.documentElement.style.left = "0";
    document.documentElement.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.position = "";
      document.documentElement.style.top = "";
      document.documentElement.style.left = "";
      document.documentElement.style.right = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [pdfDocument, onClose]);

  if (!pdfDocument) return null;

  const modalNode = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={pdfDocument.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-3 flex-shrink-0 px-4 py-3 border-b border-border bg-surface-elevated">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {pdfDocument.title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={pdfDocument.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-accent-blue hover:underline rounded-lg"
            >
              Open in new tab
            </a>
            <a
              href={pdfDocument.url}
              download
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeAriaLabel}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>
        <div className="flex-1 min-h-0 p-2 bg-muted/30 overflow-hidden">
          <Worker workerUrl={PDF_WORKER_URL}>
            <div className="w-full h-full rounded-lg bg-white overflow-auto [&_.rpv-core__viewer]:min-h-full">
              <Viewer
                fileUrl={pdfDocument.url}
                plugins={[openLinksPlugin]}
              />
            </div>
          </Worker>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;
  return createPortal(modalNode, document.body);
}
