"use client"
import Image from "next/image";
import ProjectSection from '@/components/sections/WorkProjectSection';
import ListSection from '@/components/sections/ListSection'
import Footer from '@/components/sections/Footer';
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const targetRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers true as soon as the target hits the viewport
        setIsHeaderVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust if you want it triggered slightly earlier/later
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-[var(--bg-color)]">
    <header
        className={`w-full px-6 md:px-18 py-5 items-center grid md:grid-cols-12 gap-8 z-40 fixed bg-[var(--bg-color)] transition-all duration-300 ${
          isHeaderVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <h1 className="col-span-6 md:col-span-4 text-[40px] font-sans-serif font-[500] text-[#000000] tracking-tighter text-center md:text-left">
          Juana Copello
        </h1>
      </header>

      {/* Intro Screen */}
      <div className="h-screen flex flex-col justify-center">
        <p className="text-[16px] md:text-[51px] text-[#0057AE] font-serif leading-none tracking-normal mt-10 mb-10">
          Hola!
        </p>
        <p className="text-[16px] md:text-[51px] text-[#0057AE] font-serif leading-none tracking-normal mt-10 mb-10">
          I am Juana, and I specialize in not specializing
        </p>
      </div>

        <div ref={targetRef}>
   {/* Bio Screen */}
      <div className="min-h-screen flex flex-col">
        <section className="flex-1" style={{ backgroundColor: "var(--bg-color)" }}>
          <div className="max-w-[1500px] px-6 py-10 md:py-20 md:px-18 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-20">
              <div className="hidden md:block md:col-span-17">
                {/* Target Element Attached to ref */}
                <p
                  className="text-[16px] md:text-[51px] text-[#0057AE] font-serif leading-none tracking-normal mt-10 mb-10"
                >
                  I am a designer made in Argentina but currently based in Italy, studying an MSc. in Communication Design at Politecnico di Milano. Before that, I worked for five years at La Nación (Buenos Aires) as a Visual Journalist and as an Adjunct Professor at Universidad Torcuato Di Tella.
                </p>

                <p className="text-[16px] md:text-[51px] text-[#0057AE] font-serif leading-none tracking-normal mt-10 mb-10">
                  I have provided data visualization consulting and development services to clients such as the European Council on Foreign Relations, the United Nations Population Fund and Fundar (Argentina).
                </p>

                <p className="text-[16px] md:text-[51px] text-[#0057AE] font-serif leading-none tracking-normal mt-10 mb-10">
                  This website is in English but I also speak Spanish and Italian, and I am learning German.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <main className="w-full">
        {/* Section 2: Projects or About */}
        {/* <StudentProjectSection /> */}
        <ProjectSection />
        <ListSection />
        <Footer />
      </main>
        </div>
   
    </div>
  );
}
