import {
  createContext,
  lazy,
  Suspense,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const PdfViewer = lazy(() => import("./PDFViewer"));
const ResumeContext = createContext<(() => void) | undefined>(undefined);

export function useResume() {
  const open = useContext(ResumeContext);
  if (!open) throw new Error("Resume controls require ResumeProvider");
  return open;
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();
  return (
    <ResumeContext.Provider value={() => setOpen(true)}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="curriculum-dialog flex h-[90dvh] max-h-[1050px] !w-[96vw] !max-w-none flex-col gap-0 overflow-hidden rounded-lg border-border/70 bg-background/95 p-0 backdrop-blur-2xl sm:!w-[94vw] lg:!w-[92vw]">
          <div className="shrink-0 px-5 pb-4 pt-6 sm:px-7">
            <DialogTitle className="text-2xl font-light tracking-normal sm:text-3xl">
              {t("navigation.resume")}
            </DialogTitle>
            <DialogDescription className="mt-2 text-xs">
              Larissa Cravo Carvalho Câmara Santos
            </DialogDescription>
          </div>
          {open && (
            <Suspense
              fallback={
                <div className="flex flex-1 items-center justify-center gap-3 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin" />
                </div>
              }
            >
              <PdfViewer />
            </Suspense>
          )}
        </DialogContent>
      </Dialog>
    </ResumeContext.Provider>
  );
}
