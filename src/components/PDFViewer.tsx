import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  Loader2,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getResumeInfo } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PDfViewer() {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1080);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.min(620, Math.max(200, entry.contentRect.width - 32)));
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const [resumeUrl, resumeName] = getResumeInfo();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2 sm:px-6 ">
        <span className="text-xs text-muted-foreground">Curriculum Vitae</span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            title="Zoom out"
            aria-label="Zoom out"
            disabled={zoom <= 0.75}
            onClick={() => setZoom((v) => Math.max(0.75, v - 0.25))}
          >
            <Minus />
          </Button>
          <span className="w-10 text-center text-xs tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            title="Zoom in"
            aria-label="Zoom in"
            disabled={zoom >= 1.75}
            onClick={() => setZoom((v) => Math.min(1.75, v + 0.25))}
          >
            <Plus />
          </Button>
          <span className="mx-2 h-4 border-l border-border" />
          <Button variant="ghost" size="icon" asChild>
            <a
              href={resumeUrl}
              download={resumeName}
              aria-label="Download curriculum PDF"
              title="Download PDF"
            >
              <Download />
            </a>
          </Button>
        </div>
      </div>
      <div
        ref={container}
        className="min-h-0 flex-1 overflow-auto bg-secondary/70 p-4 sm:p-8"
      >
        <Document
          file={resumeUrl}
          onLoadSuccess={({ numPages }) => {
            setPages(numPages);
            setFailed(false);
          }}
          onLoadError={() => setFailed(true)}
          className="mx-auto w-fit"
          loading={
            <div className="flex h-72 items-center justify-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Opening curriculum
            </div>
          }
          error={
            <div className="flex h-72 flex-col items-center justify-center gap-4 text-center">
              <FileText className="size-8 text-muted-foreground" />
              <p className="text-sm">The preview could not be opened.</p>
              <Button variant="outline" asChild>
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                  Open PDF
                </a>
              </Button>
            </div>
          }
        >
          <Page
            pageNumber={page}
            width={width * zoom}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="curriculum-paper"
            loading={
              <div className="flex h-72 items-center justify-center">
                <Loader2 className="size-5 animate-spin text-muted-foreground" />
              </div>
            }
          />
        </Document>
      </div>
      <div className="flex shrink-0 items-center justify-center gap-3 border-t border-border px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous page"
            title="Previous page"
            disabled={page <= 1 || failed}
            onClick={() => setPage((v) => v - 1)}
          >
            <ArrowLeft />
          </Button>
          <span className="min-w-12 text-center font-mono text-xs text-muted-foreground">
            {String(page).padStart(2, "0")} / {String(pages).padStart(2, "0")}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next page"
            title="Next page"
            disabled={page >= pages || failed}
            onClick={() => setPage((v) => v + 1)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
