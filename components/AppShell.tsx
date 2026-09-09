"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-bone font-body text-[#1A1A1A]">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Toaster position="bottom-right" richColors />
    </>
  );
}
