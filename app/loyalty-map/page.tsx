import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">

        {/* ASIDE: 4 columns */}
        <aside className="md:col-span-4 md:border-r border-black/70">
          <div className="md:sticky md:top-10 py-6 md:py-10 space-y-6 md:space-y-8 px-4">

            {/* --- BACK BUTTON --- */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-sans-serif text-xs font-semibold uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>

            <div>
              <h1 className="text-xl md:text-2xl leading-[1.2] font-serif">
                Mileistic Loyalty Map: The Governors' Devious Game in the Era of "There is No Money for You"
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#484848] mt-1 font-serif">La Nación</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Role</h4>
                <p className="text-sm font-sans-serif font-light">Web Development, Data Visualization</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Publication Date</h4>
                <p className="text-sm font-sans-serif font-light">18/10/2024</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Co-Authors</h4>
                <p className="text-sm font-sans-serif font-light">Pablo Loscri (Visual Editor), Martín Rodríguez Yebra (Politics Editor), Gastón Balatti (Frontend Developer) and Delfina Celichini (Politics Reporter)</p>
              </div>

              <button className="text-[var(--text-title)] border-3 border-[var(--text-title)] py-2 px-4 hover:bg-[var(--text-title)] hover:text-white transition-all cursor-pointer font-sans-serif font-bold text-[12px] uppercase mt-4">
                <a href="https://www.lanacion.com.ar/politica/mapa-de-fidelidad-mileista-el-sinuoso-juego-de-los-gobernadores-en-la-era-del-no-hay-plata-nid18102024/" target="_blank" rel="noopener noreferrer">
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
              <img
                src="/images/legisladores/seccion-1.png"
                alt="Full view"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Context */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-md uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                During Javier Milei's first year in office, he took measures and sent disruptive bills that necessarily required the approval of national legislators. For each of the sessions, Milei's officials negotiated law by law with the provinces' governors, which translated into the votes of the legislators over which these political leaders could influence. Two reporters from the Politics section carried out an analysis of the votes of the legislators who answer to these governors in the key bills the government needed to carry out the reforms. In this way, they sought to determine which of these leaders were allied with the libertarian government, even when they said they were not.
              </p>
            </div>

            {/* Structure */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-md uppercase font-bold font-sans-serif">Structure</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                We grouped the governors based on their closeness to the national government's ideology. We took into account how the legislators from each district's official party voted in Congress the bills proposed by the national government.
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img
                src="/images/legisladores/seccion-2.png"
                alt="Full view"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Visualizing legislators' votes */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-md uppercase font-bold font-sans-serif">visualizing legislators' votes</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                The visualization is a waffle chart, where each of the squares represent the vote of the legislator. The color and icon represent how they voted on the key bills Javier Milei needed to pass in Congress. The visualization aimed to show on a first glance how each of the governor's legislators voted in Congress, revealing secret strategies and alliances.
              </p>
            </div>

            {/* 3-image grid */}
            <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-1.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-2.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-3.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Interactivity */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-md uppercase font-bold font-sans-serif">Interactivity</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Users can hover over each square in the waffle chart to view detailed information about the legislator's voting record. This approach works effectively on mobile devices, where we had to hide certain information to optimize the user experience. In such cases, we included a call-to-action text that guides users to access the hidden details by asking them to click on the square. The tooltip shows the legislator's name, the name of the bill they voted, and what was their vote about it.
              </p>
            </div>

            {/* My role */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-md uppercase font-bold font-sans-serif">My role</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                We divided the task with another frontend developer, as we had three days to produce the entire project. I developed the waffle charts using Svelte and D3 for the color scales. I also collaborated in developing the layout and styles of the application.
              </p>
            </div>

          </section>
        </main>

      </div>
    </div>
  );
}