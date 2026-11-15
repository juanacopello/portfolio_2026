"use client";
import Image from "next/image";
import ProjectSection from "@/components/sections/WorkProjectSection";
import ListSection from "@/components/sections/ListSection";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Opening from "@/components/ui/Opening";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky header once the hero section scrolls out of view
        setIsHeaderVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Sticky Header with Name & Subtitle */}
      <header
        className={`w-full px-6 md:px-12 lg:px-16 py-3.5 md:py-4 items-center grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-8 z-40 fixed top-0 left-0 bg-[var(--background)] border-b-2 border-black transition-all duration-300 ${
          isHeaderVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="col-span-1 md:col-span-8 flex flex-row items-baseline gap-2.5 md:gap-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans-serif font-[500] text-[#000000] tracking-tight">
            Juana Copello
          </h1>
          <span className="text-xs sm:text-sm text-[#070A19]/70 font-sans-serif font-[400] tracking-tight">
            Designer &amp; Creative Developer
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] w-full flex items-end justify-start overflow-hidden"
      >
        {/* Background p5 Canvas */}
        <Opening />

        {/* Foreground Name Div */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 flex flex-col justify-end">
          <p className="text-3xl sm:text-4xl md:text-[51px] text-[#070A19] font-sans font-[500] leading-[1.05] tracking-tighter">
            Juana Copello
          </p>
          <p className="text-3xl sm:text-4xl md:text-[51px] text-[#070A19] font-sans font-[500] leading-[1.05] tracking-tighter">
            Designer &amp; Journalist
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <div className="flex flex-col">
        <section className="flex-1 bg-[#fffdfa]">
          <div className="max-w-[1500px] px-6 md:px-12 lg:px-16 py-14 sm:py-20 md:py-28 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="col-span-1 md:col-span-11 lg:col-span-10 space-y-6 sm:space-y-8 md:space-y-10">
                <p className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] text-[#0057AE] font-serif leading-snug md:leading-[1.15] tracking-tight md:tracking-[-1.5px]">
                  Hola!
                </p>

                <p className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] text-[#0057AE] font-serif leading-snug md:leading-[1.15] tracking-tight md:tracking-[-1.5px]">
                  I am a designer from Argentina currently based in Italy,
                  studying an MSc. in Communication Design at Politecnico di
                  Milano. Before, I was a visual journalist at La
                  Nación in Buenos Aires, where my work was recognized by
                  organizations such as Society for News Design and
                  Sociedad Interamericana de Prensa.
                </p>

                <p className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] text-[#0057AE] font-serif leading-snug md:leading-[1.15] tracking-tight md:tracking-[-1.5px]">
                  I have provided data visualization work to clients such as the
                  European Council on Foreign Relations, the United Nations
                  Population Fund and Fundar (Argentina). You can read{" "}
                  <a
                    href="http://www.linkedin.com/in/juanacopello"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity duration-200"
                  >
                    here more about me and my work so far.
                  </a>{" "}
                  
                </p>

                <p className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] text-[#0057AE] font-serif leading-snug md:leading-[1.15] tracking-tight md:tracking-[-1.5px]">
                  This website is in English but I also speak Spanish and
                  Italian, and I am learning German.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className="w-full">
        <ProjectSection />
        <ListSection />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}