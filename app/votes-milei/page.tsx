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
                Who Elected Javier Milei? The Economic Analysis of the Libertarian Vote
              </h1>
              <p className="text-[14px] md:text-[14px] text-[#484848] font-sans-serif uppercase">La Nación</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Role</h4>
                <p className="text-sm font-sans-serif font-light">Web Development, Data Visualization</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Publication Date</h4>
                <p className="text-sm font-sans-serif font-light">07/09/2023</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Co-Authors</h4>
                <p className="text-sm font-sans-serif font-light">Pablo Loscri, Florencia Abd (Visual Editors), Nicolás Cassese (Editor), Florencia Rodríguez Altube (Data Reporter), Gabriela Bouret, Sofía Weintraub, Bruno Soifer, Miguel Bevacqua (Data Analysts).</p>
              </div>

              <button className="text-[var(--text-title)] border-3 border-[var(--text-title)] py-2 px-4 hover:bg-[var(--text-title)] hover:text-white transition-all cursor-pointer font-sans-serif font-bold text-[12px] uppercase mt-4">
                <a href="https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/" target="_blank" rel="noopener noreferrer">
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
              <img src="/images/mockups/milei_votos.png" className="w-full h-auto object-cover" />
            </div>

            {/* Context */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Until 2023, the vote in Argentina was concentrated in two fairly stable conglomerates with an evident class condition: the tendency of the population's poorer segments were towards Peronism and the richer ones towards Juntos por el Cambio. These two halves imploded on August 13, 2023, when the political scenario was divided into three thirds, with Javier Milei disrupting the political scene. After Javier Milei's surprise victory in the primary elections, La Nación set out to analyze the political and social phenomenon of this eccentric economist and extreme right-wing candidate. Who were his voters and what was their profile? To do so, we cross-referenced electoral data with several socioeconomic variables from the 2022 Argentine census to find if there were any relationships between them. The results of this analysis were revealing. While for the two traditional parties a relationship can be seen between the political vote and socioeconomic variables, the same logic is not reproduced for the far-right party. In other words, we discovered a transversality among Milei's voters. From this data-driven production, we were able to empirically verify a social phenomenon: the rise of Javier Milei as a political figure, who months later would be elected president.
              </p>
            </div>

            {/* Variables */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Variables</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                The variables cross-referenced were the percentage of votes obtained in each department of the country by the political parties Unión por la Patria, Juntos por el Cambio and La Libertad Avanza (Milei's political party) in relation to the weighted average salary of the population, access to sewage, and access to internet, which were taken from the 2022 Census. We also analyzed the relationship between the winner in each district and access to the basic food basket (an official indicator that defines the poverty line, which is published every three months).
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img src="/images/milei/pobreza.png" className="w-full h-auto object-cover" />
            </div>

            {/* Structure */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Structure</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Each chart includes a general analysis to guide the reader through its interpretation, providing insights into the key trends and patterns. Additionally, we show the Pearson correlation value to quantify the strength and direction of the relationship between variables. While some of the charts do not show a correlation between variables, we decided to publish them anyway to show the diversity of Javier Milei's voters profile.
              </p>
            </div>

            {/* 3-image grid */}
            <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/milei/macri.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/milei/milei.png" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/milei/peronismo.png" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* My role */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">My role</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                I developed the interactive correlation charts, in which I used the Javascript libraries Observable Plot and D3, which loaded the CSV file with the data. The project provided an excellent opportunity to explore and test these Javascript libraries from a technical perspective.
              </p>
            </div>

            {/* Interactivity */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Interactivity</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Some of the charts show a tooltip when the user hovers over each circle. We wanted to show additional data that gave the chart another layer of information. The tooltip shows the district's name, the percentage of votes the party got in that district and the value of the cross-referenced variable (in this case, access to basic food basket).
              </p>
            </div>

          </section>
        </main>

      </div>
    </div>
  );
}