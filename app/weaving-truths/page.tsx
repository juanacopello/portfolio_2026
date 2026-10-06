import Link from 'next/link';
import Carrousel from '@/components/ui/Carrousel'
import FourColumnGridSection from '@/components/ui/FourColumnGrid'

export default function ProjectDetail() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#DCFE52]">

      <header className="top-0 z-30 w-full border-b border-black/10 bg-white/95">
        <div className="mx-auto max-w-[1400px] px-6 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-sans text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Back to Home
              </Link>

            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN EDITORIAL CONTENT (12 Columns) --- */}
      <main className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
        <p className="text-lg md:text-[20px] font-sans-serif font-light leading-tight tracking-tight text-black/60">
          Weaving Truths
        </p>
        <h1 className='font-serif text-[45px] font-bold tracking-tighter mt-[-10px]'>A game inspired by the complexity of nature</h1>

        {/* Context (Spans 8 cols) */}
        <section className='py-[50px]'>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif">
            {/* Co-Authors: Row 1, Columns 1 to 4 */}
            <div className="md:col-start-1 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Co-Authors
              </h4>
              <ul className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                <li>Anfal Alzarraj</li>
                <li>Isabela Andrade de Oliveira e Castro</li>
                <li>Romchel M. Fuentes</li>
                <li>Susana Pérez Alves</li>
                <li>Alice Torzoni</li>
              </ul>
            </div>

            {/* Year: Row 1, Columns 5 to 7 (beside Co-Authors) */}
            <div className="md:col-start-5 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Year
              </h4>
              <p className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2026
              </p>
            </div>

            {/* Paragraph: Row 2, Starts at Column 1 below the metadata */}
            <p className="col-span-1 md:col-start-1 md:col-span-6 text-base md:text-[20px] text-black/90 font-light leading-snug">
              Weaving Truths is a two-player hybrid game developed in the context of a Design Studio at Politecnico di Milano. The game combines a physical board and a digital mobile environment, set in a fantasy world that is losing its balance. Players take on the roles of two characters and explore the world separately, each encountering different characters who offer fragmented perspectives on why things are falling apart.
            </p>
          </div>

          <div className="col-span-1 md:col-span-12 w-full overflow-hidden">
            <img
              src="/images/weaving/overview.jpg"
              alt="Weaving Truths Overview Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>



        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            Context
          </h2>

          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              This project was created in the Complex Artifacts and System Design Studio at the Politecnico di Milano. In this lab we were tasked to develop a in interactive digital narrative to raise awareness and examine how climate change, socio-economic dynamics, and policy frameworks have an impact on the agrifood system.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              After an initial research, we defined that our project would address pollinator decline. Therefore, our game aimed to foster a deeper understanding of the complexity of natural systems and the interconnected relationships that sustain them. Through play, participants discover that even the smallest actions can trigger cascading effects across the entire system.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The central message of the game is that changing one element of a system inevitably affects many others, much like the butterfly effect. As players interact with the game, they experience how individual decisions influence the balance of the ecosystem, revealing both visible and hidden consequences. In this way, the game also reflects contemporary ideas of uncertainty and interconnectedness, where cause and effect are often difficult to predict.
            </p>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
            <div className="col-span-1 grid-start-1 md:col-span-6 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1 grid-start-7 md:col-span-6 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>


        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            The backstory
          </h2>

          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The game is setted in a fantasy dystopian world which is divided in two worlds. On one side, there is Calystrum is a technocratic world shaped by pollution, in which society is centered around a massive gold-built data center that governs how people live and work. Those who resist the system are marginalized to the city's outskirts, in which there are communities that are connected to the nature. On the other side, Noctichroma is a dark, bioluminescent dimension beneath Calystrum, connected to it through gold-pit portals. It's home to non-human beings who generate light, electrical, and chemical energy.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              Noctichroma once existed in a symbiotic loop with Calystrum, exchanging energy and signals across the portals. But as Calystrum mines away the gold that anchors those portals, the connection weakens — less light and energy reach the underworld, and it begins to starve.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            The mechanics
          </h2>

          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              For this prototype, I developed the four minigames featured in the digital environment, adapting the visual language established by our team’s designer. The mini games were added to to add a level of challenge for the players while also complementing the overall narrative.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              To complement the narrative and add a level of challenge for the pla, these puzzles offer tactile, individual challenges directly tied to earlier character interactions. We decided to leverage the mobile environment to build mechanics around device-native hardware, using p5.js alongside ml5.js for real-time camera hand-tracking, and p5-phone to tap into gyroscope and sensor data.
            </p>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
            <div className="col-span-1 grid-start-1 md:col-span-3 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1 grid-start-5 md:col-span-3 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1 grid-start-9 md:col-span-3 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
          Elements
        </h2>
        <Carrousel></Carrousel>



        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            My role
          </h2>

          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              For this prototype, I developed the four minigames featured in the digital environment, adapting the visual language established by our team’s designer. The mini games were added to to add a level of challenge for the players while also complementing the overall narrative.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              To complement the narrative and add a level of challenge for the pla, these puzzles offer tactile, individual challenges directly tied to earlier character interactions. We decided to leverage the mobile environment to build mechanics around device-native hardware, using p5.js alongside ml5.js for real-time camera hand-tracking, and p5-phone to tap into gyroscope and sensor data.
            </p>
          </div>
        </section>
        <FourColumnGridSection></FourColumnGridSection>
      </main>

    </div>
  );
}