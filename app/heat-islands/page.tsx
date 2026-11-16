import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#DCFE52] overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* --- MAIN EDITORIAL CONTENT --- */}
      <main className="mx-auto max-w-[1400px] px-6 md:px-12 py-10 sm:py-12 md:py-16">
        <p className="text-base sm:text-lg md:text-[20px] font-sans-serif font-light leading-tight tracking-tight text-black/60">
          Heat Islands
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[45px] font-bold tracking-tighter leading-tight mt-0 md:mt-[-10px]">
          An article about the impact of climate change in cities
        </h1>

        {/* Metadata & Overview */}
        <section className="py-8 sm:py-10 md:py-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif items-start">
            {/* Co-Authors */}
            <div className="sm:col-span-1 lg:col-start-1 lg:col-span-3">
              <h4 className="text-lg md:text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b">
                Co-Authors
              </h4>
              <ul className="text-base md:text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                <li>La Nación&apos;s Visual, Data and Video Teams</li>
              </ul>
            </div>

            {/* Year */}
            <div className="sm:col-span-1 lg:col-start-5 lg:col-span-3">
              <h4 className="text-lg md:text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b">
                Year
              </h4>
              <p className="text-base md:text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2022
              </p>
            </div>

            {/* CTA Button */}
            <div className="sm:col-span-2 lg:col-start-8 lg:col-span-3 lg:flex lg:justify-end">
              <a
                href="https://www.lanacion.com.ar/sociedad/islas-de-calor-portenas-tenes-calor-entonces-ni-te-asomes-a-estas-esquinas-portenas-donde-la-nid06022024/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-serif inline-block whitespace-nowrap px-4 py-2 text-[#0065C9] uppercase text-sm md:text-[15px] font-[700] border-2 border-[#0065C9] hover:bg-[#0065C9] hover:text-white transition-colors duration-200"
              >
                View Online
              </a>
            </div>

            {/* Intro Summary */}
            <p className="col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-6 text-base sm:text-lg md:text-[20px] text-black/90 font-light leading-tight">
              <i>Urban Heat Islands: The Corners in Buenos Aires where Temperature is Hell</i> is an interactive visual story piece published by La Nación that investigates how climate change and urban planning drive extreme ground temperatures across Buenos Aires. Combining satellite analysis with street-level mapping, the project lets readers explore temperature disparities in their own neighborhoods while discovering the health impacts and potential urban solutions to this phenomenon.
            </p>

            {/* Hero Image */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-8 w-full overflow-hidden">
              <img
                src="/images/islas/apertura.jpg"
                alt="Urban Heat Islands opening screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start py-8 sm:py-10 md:py-[50px] my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-4 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            Context
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The impact of climate change is becoming increasingly evident in large cities. According to records from the National Meteorological Service, last summer in Argentina was the warmest since systematic records began in 1961, experiencing 10 heatwaves, an unprecedented phenomenon for the country. The lack of urban planning and extreme weather events —such as increasingly stifling summers and persistent droughts in Argentina— translate into a phenomenon called &ldquo;urban heat islands&rdquo;. These are areas where the temperature is higher than the surrounding environment. In Buenos Aires, there are several urban heat islands, usually generated by a combination of extensive concrete and little vegetation or water.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
            Given this scenario, we combined journalistic research, data analysis, maps, and immersive visualizations to cover all aspects of the problem: what heat islands are and why they occur, their relationship with climate change, health effects, and the solutions adopted by other cities to mitigate this phenomenon.
            </p>
          </div>
        </section>

        {/* Two-Column Map Overlays */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-6 aspect-video overflow-hidden bg-zinc-100 border border-black/10">
              <img
                src="/images/islas/mapa-overlay.jpg"
                alt="Interactive satellite map overview of Buenos Aires"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 md:col-span-6 aspect-video overflow-hidden bg-zinc-100 border border-black/10">
              <img
                src="/images/islas/mapa-overlay-detalle.jpg"
                alt="Street-level temperature detail on the interactive map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start py-8 sm:py-10 md:py-[50px] my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-4 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            My role
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              Firstly, with the backend and frontend development team we built an interactive map using data from the Urban Reporting based on Satellite Analysis (URSA) of the Inter-American Development Bank (IDB), with a street-level detail, allowing the audience to interact with the content and choose a specific point in the city, such as their home block or workplace street. This map visually presents the annual average ground temperature in different areas of the city compared to the average in rural areas. In some cases, differences of more than 20 degrees Celsius can be observed between different locations. This required the technical expertise of a data scientist and urbanist, who measured ground temperatures in 500 cities across Latin America and the Caribbean using Landsat 8 satellite images (NASA), with the Buenos Aires chapter presented in this production.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              To visualize the map, we used an in-house map server developed by La Nación, in combination with open-source JavaScript libraries such as Leaflet, Geoblaze, and Georaster. These libraries enabled us to integrate URSA data with our custom tile map. Additionally, we implemented the Nominatim API to power the street search feature, allowing user inputs to interact with the map.
            </p>
          </div>
        </section>

        {/* Street Search Image */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-10 lg:col-span-7 overflow-hidden bg-zinc-100 border border-black/10">
              <img
                src="/images/islas/buscador-todos.jpg"
                alt="Street search interface on the heat islands map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Opening Implementation */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 items-start py-8 sm:py-10 md:py-[50px] my-[20px]">
          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              I also worked on implementing the animated project opening of videos, which featured animated bars as part of the visual interaction. For this, I used Svelte and D3 to build the height scales and the color transition. The videos were uploaded to JW Player, a video database, and I used the API to connect to the database and fetch the video. Additionally, I also used the Intersection Observer API to trigger the animation automatically when the video element enters the viewport as the user scrolls. We filmed the places with the highest and lowest ground temperatures for the animated opening project.
            </p>
          </div>
        </section>

        {/* Opening Animation Image */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-10 lg:col-span-8 overflow-hidden bg-zinc-100 border border-black/10">
              <img
                src="/images/islas/apertura-2.jpg"
                alt="Animated opening sequence with temperature bars"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}