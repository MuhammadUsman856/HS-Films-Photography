"use client";

import { ThemeProvider } from "next-themes";
import { PageLoader } from "@/components/system/PageLoader";
import { WhatsAppButton } from "@/components/system/WhatsAppButton";
import { BackToTop } from "@/components/system/BackToTop";
import { CookieNotice } from "@/components/system/CookieNotice";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageLoader />
      {children}
      <WhatsAppButton />
      <BackToTop />
      <CookieNotice />
    </ThemeProvider>
  );
}
