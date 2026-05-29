import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">

        {/* ASIDE: 4 columns */}
        <aside className="md:col-span-4 md:border-r border-black/70">
          <div className="md:sticky md:top-10 py-6 md:py-10 space-y-6 md:space-y-8 px-6">

            {/* --- BACK BUTTON --- */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>

            <div>
              <h1 className="text-xl md:text-2xl leading-none font-sans-serif-2 font-semibold tracking-tight text-black/90">
                Do You know How Much Gasoline and Milk Cost? Test Your Notion of Prices in times of Rampant Inflation
              </h1>
              <p className="text-[14px] md:text-[14px] text-[#484848] font-sans-serif uppercase">La Nación</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Role</h4>
                <p className="text-sm font-sans-serif font-light">Web Development, Data Reporting</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Publication Date</h4>
                <p className="text-sm font-sans-serif font-light">07/09/2022</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Co-Authors</h4>
                <p className="text-sm font-sans-serif font-light">Pablo Loscri (Visual Editor), Nicolás Cassese (Editor), and Melisa Reinhold (Economics Reporteer)</p>
              </div>

              <button className="text-[var(--text-title)] border-3 border-[var(--text-title)] py-2 px-4 hover:bg-[var(--text-title)] hover:text-white transition-all cursor-pointer font-sans-serif font-bold text-[12px] uppercase mt-4">
                <a href="https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN: 8 columns */}
        <main className="md:col-span-8 py-6 md:py-10 space-y-8 md:space-y-12">
          <section className="grid grid-cols-4 md:grid-cols-7 gap-y-6 md:gap-y-8">

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img src="/images/inflacion/alquiler.png" className="w-full h-auto object-cover" />
            </div>

            {/* Context */}
            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Over the past years, Argentina's main concern has been inflation. In 2022, the year in which this project was published, Argentina's accumulated annual inflation was 94,2%. This accelerated trend has not only impacted in Argentine's purchasing power, but also caused them to lose track of the real value of things. This phenomenon makes it impossible to know whether we are buying things expensive or cheap. To show how this phenomenon plays out, we published this quiz that asked our readers how much they thought a product or service was worth. Once answered, the application showed the real value and defined how close or far away the reader had been from that price.
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img src="/images/inflacion/feedback-2.png" className="w-full h-auto object-cover" />
            </div>

            {/* My role */}
            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">My role</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                I had a dual role in this project: firstly, I was in charge of finding the present and past prices of a given list of goods and services. For items such as gasoline, rent and milk, I checked in official websites. However, for other items like plane tickets we had to check with press officers. Simultaneously, I was in charge of the web development of the quiz, for which I used the Javascript framework Vue. The app loaded data from Google Spreadsheets, compared user answers to real values, provided feedback on accuracy, and included a bar chart of price trends with an analysis of the underlying factors.
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img src="/images/inflacion/cafe.png" className="w-full h-auto object-cover" />
            </div>

            {/* User journey */}
            <div className="space-y-4 col-span-4 md:col-span-6">
              <h2 className="text-lg uppercase font-bold font-sans-serif">User journey</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                The user takes a guess with the price. The user needs to fill all input boxes in order to activate the green button that checks if the price is right. Once the user has completed the input field, the green button activates and becomes clickable. Once clicked, the app shows how close or far away the input price is from the real value of the product. Scrolling down, the user sees a bar chart showing the evolution of the price and an explanation behind the trend.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/inflacion/seq_1.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/inflacion/seq_2.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/inflacion/seq_3.png" className="w-full h-auto object-cover" />
              </div>
            </div>

          </section>
        </main>

      </div>
    </div>
  );
}