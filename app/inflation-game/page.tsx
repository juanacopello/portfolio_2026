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
                className="group inline-flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
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
          Inflation
        </p>
        <h1 className='font-serif text-[45px] font-bold tracking-tighter mt-[-10px]'>A quiz to reflect upon the distortion of prices</h1>

        {/* Context (Spans 8 cols) */}
        <section className='py-[50px]'>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif">
            {/* Co-Authors: Row 1, Columns 1 to 4 */}
            <div className="md:col-start-1 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Co-Authors
              </h4>
              <ul className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                <li>Pablo Loscri <span className="font-[100]">(Visual Editor)</span></li>
                <li>Nicolás Cassese <span className='font-[100]'>(Editor)</span></li>
                <li>Melisa Reinhold <span className='font-[100]'>(Reporter)</span></li>
              </ul>
            </div>

            {/* Year: Row 1, Columns 5 to 7 (beside Co-Authors) */}
            <div className="md:col-start-5 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Year
              </h4>
              <p className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2022
              </p>
            </div>

              <div className="md:col-start-10 md:col-span-2">
              <a
                href="https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-serif inline-block px-4 py-2 text-[#0065C9] uppercase text-[15px] font-[700] border-2 border-[#0065C9] hover:bg-[#0065C9] hover:text-white transition-colors duration-200"
              >
                View Online
              </a>
            </div>

            {/* Paragraph: Row 2, Starts at Column 1 below the metadata */}
            <p className="col-span-1 md:col-start-1 md:col-span-6 text-base md:text-[20px] text-black/90 font-light leading-snug">
              <i>Do You Know How Much Gasoline and Milk Cost? Test your Notion of Prices in Times of Rampant Inflation</i> is an interactive news quiz developed at La Nación to reflect on how Argentina’s 94.2% annual inflation distorted people’s perception of everyday prices. Readers are challenged to guess the real cost of common goods and services—from milk and gasoline to plane tickets—before receiving immediate feedback on how close their estimates were, alongside historical price charts explaining the trends behind each item.
            </p>

                <div className="col-span-1 md:col-span-10 w-full overflow-hidden">
            <img
              src="/images/inflacion/responsive-design-2.jpg"
              alt="Weaving Truths Overview Image"
              className="w-full h-full object-cover"
            />
          </div>
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
              Over the past years, Argentina's main concern has been inflation. In 2022, the year in which this project was published, Argentina's accumulated annual inflation was 94,2%. This accelerated trend has not only impacted in Argentine's purchasing power, but also caused them to lose track of the real value of things. This phenomenon makes it impossible to know whether we are buying things expensive or cheap. To show how this phenomenon plays out, we published this quiz that asked our readers how much they thought a product or service was worth. Once answered, the application showed the real value and defined how close or far away the reader had been from that price.
            </p>
          </div>
        </section>


        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-12 md:gap-y-16">
            <div className="col-span-1 grid-start-1 md:col-span-7 overflow-hidden rounded-sm bg-zinc-100 border border-black/10">
              <img
                src="/images/inflacion/screen-1.jpg"
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* <div className="col-span-1 grid-start-7 md:col-span-6 overflow-hidden rounded-lg bg-zinc-100 border border-black/10">
              <img
                src=""
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div> */}
          </div>
        </section>


        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            User Journey
          </h2>

          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The user takes a guess with the price. The user needs to fill all input boxes in order to activate the green button that checks if the price is right. Once the user has completed the input field, the green button activates and becomes clickable. Once clicked, the app shows how close or far away the input price is from the real value of the product. Scrolling down, the user sees a bar chart showing the evolution of the price and an explanation behind the trend.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
            <div className="col-span-6 grid-start-1 md:col-span-7 overflow-hidden bg-zinc-100 border border-black/10">
              <img
                src="/images/inflacion/journey-2.jpg"
                alt="Feature Interface Screen"
                className="w-full h-auto object-cover"
              />
            </div>
           
          </div>
        </section>
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* H2 starts in column 2, spans 4 columns on desktop */}
          <h2 className="md:col-start-1 md:col-span-4 text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            My role
          </h2>
          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              I had a dual role in this project: firstly, I was in charge of finding the present and past prices of a given list of goods and services. For items such as gasoline, rent and milk, I checked in official websites. However, for other items like plane tickets we had to check with press officers. Simultaneously, I was in charge of the web development of the quiz, for which I used the Javascript framework Vue. The app loaded data from Google Spreadsheets, compared user answers to real values, provided feedback on accuracy, and included a bar chart of price trends with an analysis of the underlying factors.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}