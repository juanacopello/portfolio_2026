"use client"
import Image from "next/image";
import ProjectSection from '@/components/sections/WorkProjectSection';
import ListSection from '@/components/sections/ListSection'
import Footer from '@/components/sections/Footer';
import Contact from '@/components/sections/Contact';
import Opening from '@/components/ui/Opening';
import { useState, useEffect, useRef } from "react";


export default function Home() {
const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show header when intro scrolls OUT of view
        setIsHeaderVisible(!entry.isIntersecting);
      },
      {
        threshold: 0, // Triggers as soon as the intro block leaves the viewport
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div>
     {/* Sticky Header with Name & Subtitle */}
      <header
        className={`w-full px-6 md:px-18 py-4 items-center grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 z-40 fixed top-0 left-0 bg-[var(--bg-color)] border-b border-black/10 transition-all duration-300 ${
          isHeaderVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row md:items-baseline md:gap-3">
          <h1 className="text-xl md:text-2xl font-sans font-[500] text-[#000000] tracking-tight">
            Juana Copello
          </h1>
          <span className="text-xs md:text-sm text-[#070A19]/70 font-sans font-[400] tracking-tight">
            Designer &amp; Creative Developer
          </span>
        </div>
      </header>

      <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "start",
        overflow: "hidden",
      }}
    >
      {/* Background p5 Canvas */}
      <Opening />

      {/* Foreground Name Div */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          color: "#ffffff",
          height:"90%",
          display:"flex",
          flexDirection: "column",
          justifyItems: "flex-end",
          marginBottom: "50px",

        }}
      >
         <p className="text-[16px] md:text-[51px] text-[#070A19] font-sans-serif font-[500] leading-none tracking-tighter pl-6 md:pl-18">
          Juana Copello
        </p>
        <p className="text-[16px] md:text-[51px] text-[#070A19] font-sans-serif font-[500] leading-none tracking-tighter mb-10 pl-6 md:pl-18">
          Designer &amp; Journalist
        </p>
      </div>
    </main>




      <div ref={targetRef}>
        {/* Bio Screen */}
        <div className="min-h-screen flex flex-col">
          <section className="flex-1" style={{ backgroundColor: "#fffdfa" }}>
            <div className="max-w-[1500px] px-6 py-10 md:py-20 md:px-18 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-20">
                <div className="hidden md:block md:col-span-17">
                  {/* Target Element Attached to ref */}

                  <p className="text-[16px] md:text-[40px] text-[#0057AE] font-serif leading-none tracking-[-2px] mt-10 mb-10">Hola!</p>
                  <p
                    className="text-[16px] md:text-[40px] text-[#0057AE] font-serif leading-none tracking-[-2px] mt-10 mb-10"
                  >
                     
                    I am a designer from Argentina currently based in Italy, studying an MSc. in Communication Design at Politecnico di Milano. Before that, I worked as a visual journalist at La Nación in Buenos Aires, where my work was recognized by organizations such as the Society for News Design and the Sociedad Interamericana de Prensa.
                  </p>

                  <p className="text-[16px] md:text-[40px] text-[#0057AE] font-serif leading-none tracking-[-2px] mt-10 mb-10">
                    I have provided data visualization work to clients such as the European Council on Foreign Relations, the United Nations Population Fund and Fundar (Argentina). 
  You can read{" "}
  <a
    href="http://www.linkedin.com/in/juanacopello"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:opacity-70 transition-opacity duration-200"
  >
    here
  </a>{" "}
  more about me and the work I did.

                    
                  </p>

                  <p className="text-[16px] md:text-[40px] text-[#0057AE] font-serif leading-none tracking-[-2px] mt-10 mb-10">
                    This website is in English but I also speak Spanish and Italian, and I am learning German.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <main className="w-full">
          <ProjectSection />
          <ListSection />
          {/* <Contact /> */}
          <Footer />
        </main>
      </div>

    </div>
  );
}
