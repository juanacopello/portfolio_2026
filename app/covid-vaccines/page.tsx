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
          Covid-19 Vaccines
        </p>
        <h1 className='font-serif text-[45px] font-bold tracking-tighter mt-[-10px]'>A visual explainer of how vaccines work</h1>

        {/* Context (Spans 8 cols) */}
        <section className='py-[50px]'>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif">
            {/* Co-Authors: Row 1, Columns 1 to 4 */}
            <div className="md:col-start-1 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Co-Authors
              </h4>
              <ul className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                <li>La Nación's Visual, Data and Video Teams</li>
              </ul>
            </div>

            {/* Year: Row 1, Columns 5 to 7 (beside Co-Authors) */}
            <div className="md:col-start-5 md:col-span-3">
              <h4 className="text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b-1">
                Year
              </h4>
              <p className="text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2021
              </p>
            </div>

            <div className="md:col-start-10 md:col-span-2">
            <button className='px-4 py-2 bg-[#0065C9] text-[#dfec59] uppercase text-[15px] font-[700]'>View Online</button>
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
             The impact of climate change is becoming increasingly evident in large cities. According to records from the National Meteorological Service, last summer in Argentina was the warmest since systematic records began in 1961, experiencing 10 heatwaves, an unprecedented phenomenon for the country. The lack of urban planning and extreme weather events —such as increasingly stifling summers and persistent droughts in Argentina— translate into a phenomenon called "urban heat islands". These are areas where the temperature is higher than the surrounding environment. In Buenos Aires, there are several urban heat islands, usually generated by a combination of extensive concrete and little vegetation or water.
            </p>
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
            In addition to discomfort, urban heat islands are critical because they impact public health and energy consumption, among other issues. Given this scenario, we combined journalistic research, data analysis, maps, and immersive visualizations to cover all aspects of the problem: what heat islands are and why they occur, their relationship with climate change, health effects, and the solutions adopted by other cities to mitigate this phenomenon.
            </p>
          </div>
        </section>


       <section>
  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
    
    {/* Left Item: Video */}
    <div className="col-span-1 md:col-span-6 flex flex-col group">
      <div className="w-full aspect-video overflow-hidden rounded-lg bg-zinc-100 border border-black/10 mb-3">
        <video
          src="images/vacunas/vacunas.mp4"
          poster="/images/poster-4.jpg"
          controls
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0063C5]">
          Innovation
        </span>
        <h3 className="text-base font-semibold tracking-tight text-black/90 leading-snug">
          Sustainable Materials in Modern Craft
        </h3>
      </div>
    </div>

    {/* Right Item: Image */}
    <div className="col-span-1 md:col-span-6 flex flex-col group">
      <div className="w-full aspect-video overflow-hidden rounded-lg bg-zinc-100 border border-black/10 mb-3">
        <img
          src="images/vacunas/perfiles.jpg"
          alt="Feature Interface Screen"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0063C5]">
          Interface
        </span>
        <h3 className="text-base font-semibold tracking-tight text-black/90 leading-snug">
          Feature Interface Screen Overview
        </h3>
      </div>
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
            Firstly, with the backend and frontend development team we built an interactive map using data from the Urban Reporting based on Satellite Analysis (URSA) of the Inter-American Development Bank (IDB), with a street-level detail, allowing the audience to interact with the content and choose a specific point in the city, such as their home block or workplace street. This map visually presents the annual average ground temperature in different areas od the city compared to the average in rural areas. In some cases, differences of more than 20 degrees Celsius can be observed between different locations. This required the technical expertise of a data scientist and urbanist, who measured ground temperatures in 500 cities across Latin America and the Caribbean using Landsat 8 satellite images (NASA), with the Buenos Aires chapter presented in this production.
            </p>
               <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
            To visualize the map, we used an in-house map server developed by La Nación, in combination with open-source JavaScript libraries such as Leaflet, Geoblaze, and Georaster. These libraries enabled us to integrate URSA data with our custom tile map. Additionally, we implemented the Nominatim API to power the street search feature, allowing user inputs to interact with the map.
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
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-x-8 items-start py-[50px] my-[20px]">
          {/* Paragraph container starts in column 6, spans 6 or 7 columns to fill the rest of the 12-column grid */}
          <div className="md:col-start-1 md:col-span-6 space-y-4">
            <p className="text-base md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
             I also worked on implementing the animated project opening of videos, which featured animated bars as part of the visual interaction. For this, I used Svelte and D3 to build the height scales and the color transition. The videos were uploaded to JW Player, a video database, and I used the API to connect to the database and fetch the video. Additionally, I also used the Intersection Observer API to trigger the animation automatically when the video element enters the viewport as the user scrolls. We filmed the places with the highest and lowest ground temperatures for the animated opening project.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}