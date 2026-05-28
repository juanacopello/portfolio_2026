import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">

        {/* ASIDE: 4 columns — hidden on mobile, shown as top bar */}
        <aside className="md:col-span-4 md:border-r border-black/70">
          <div className="md:sticky md:top-10 py-6 md:py-10 space-y-6 md:space-y-8 px-4">

            {/* --- BACK BUTTON --- */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>

            <div>
              <h1 className="text-xl md:text-2xl leading-[1.2] font-sans-serif-2 font-semibold tracking-tight text-black/90">
                Covid-19 Vaccines: A Global Hope
              </h1>
              <p className="text-[14px] md:text-[14px] text-[#484848] font-sans-serif uppercase">La Nación</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Role</h4>
                <p className="text-sm font-sans-serif font-light">Data Reporting</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Publication Date</h4>
                <p className="text-sm font-sans-serif font-light">06/05/2021</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Co-Authors</h4>
                <p className="text-sm font-sans-serif font-light">Pablo Loscri (Visual Editor), Florencia Fernández Blanco (Editor), Giselle Ferro, Gabriel Podestá, Nicolás Rivera (Infographics Designers), Alejandra Bliffeld (UI Designer) and Fabiola Czubaj (Science Reporter)</p>
              </div>

              <button className="text-[var(--text-title)] border-3 border-[var(--text-title)] py-2 px-4 hover:bg-[var(--text-title)] hover:text-white transition-all cursor-pointer font-sans-serif font-bold text-[12px] uppercase mt-4">
                <a href="https://www.lanacion.com.ar/sociedad/vacunas-covid-19-cuales-llegaran-argentina-que-resultados-nid2526910/" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN: 8 columns */}
        <main className="md:col-span-8 py-6 md:py-10 space-y-8 md:space-y-12">
          <section className="grid grid-cols-4 md:grid-cols-8 gap-y-6 md:gap-y-8">

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img src="/images/vacunas/general-perfiles.png" className="w-full h-auto object-cover" />
            </div>

            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                In 2020, shortly after the coronavirus pandemic was declared, we began researching vaccine developments that were under investigation for prevention. We wanted to report on the latest vaccine developments, how they worked and the stages of drug development. In June 2020 we published the first version of the report. In 2021, when the vaccination campaign started, we published a second version focusing this time on the vaccines developments.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/profile-1.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/profile-2.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/profile-3.png" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Profiles</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                We used the data on vaccines in development to create a profile for each one, including key details such as the involved laboratories and the clinical phase the vaccine was in. We also included storage temperature, efficacy results, and list price per dose. Since our audiences are mainly based in Argentina, we also included if it was going to be applied in the country. The color palette encodes the technology platform used: non-replicating viral vector (purple), mRNA (green) or inactivated viruses (red).
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6 my-[10px] md:my-[20px]">
              <img src="/images/mockups/vacunas.png" className="w-full h-auto object-cover" />
            </div>

            <div className="space-y-4 col-span-4 md:col-span-6">
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                This report includes a description of each vaccine, how they worked, and the latest news about them. It was updated daily as more information of the vaccines came out. The spread of misinformation about COVID-19 vaccines highlighted the need for accessible and reliable educational tools. By breaking down complex scientific concepts into clear and engaging visuals, we aimed to provide audiences with accurate information.
              </p>
            </div>

            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Scrollytelling narrative</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                The latest vaccine developments provided an opportunity to showcase how each vaccine platform works. We enhanced traditional infographics by adding a layer of interactivity, using the scrollytelling technique. The narrative unfolds as users scroll, encouraging them to engage further with the story. Our goal was to adapt the infographic for the modern audiences, who primarily consume news through mobile devices.
              </p>
            </div>

                <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/como-funciona-1.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/como-funciona-2.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/vacunas/como-funciona-3.png" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* <div className="overflow-hidden col-span-4 md:col-span-6">
              <video
                src="/images/vacunas/inactivado_v3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div> */}

            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">My role</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                My task in this project was to investigate about how vaccines worked, which were the latest vaccines developments, and how each technology platform worked in order to cause immunization. When we began searching for information, in March 2020, there was still little data available about them, and it was not consolidated in one place. We had to look through the World Health Organization, journalistic articles, and press documents issued by the laboratories. In order to build the visual explanation of the vaccine platforms, I reached out to scientists, infectologists and immunologists so I could have an integral perspective of the vaccination and immunization process.
              </p>
            </div>

        

          </section>
        </main>

      </div>
    </div>
  );
}