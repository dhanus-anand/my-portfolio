"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { PdfModal } from "@/components/ui/PdfModal";

const RESUME_PDF = { title: "Resume", url: "/resume.pdf" };

type ResumeModalContextValue = {
  openResumeModal: () => void;
};

const ResumeModalContext = createContext<ResumeModalContextValue | null>(null);

export function useResumeModal() {
  const ctx = useContext(ResumeModalContext);
  if (!ctx) throw new Error("useResumeModal must be used within ResumeModalProvider");
  return ctx;
}

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [pdfDocument, setPdfDocument] = useState<{ title: string; url: string } | null>(null);

  const openResumeModal = useCallback(() => {
    setPdfDocument(RESUME_PDF);
  }, []);

  const closeModal = useCallback(() => {
    setPdfDocument(null);
  }, []);

  return (
    <ResumeModalContext.Provider value={{ openResumeModal }}>
      {children}
      <PdfModal pdfDocument={pdfDocument} onClose={closeModal} />
    </ResumeModalContext.Provider>
  );
}
