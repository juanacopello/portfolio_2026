import Link from 'next/link';
import VideoPlayer from '@/components/ui/VideoPlayer'

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
          Museum of Modern Art's Department of Art and Sculpture
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[45px] font-bold tracking-tighter leading-tight mt-0 md:mt-[-10px]">
          Showing with data how curatorial choices changed in history
        </h1>

        {/* Metadata & Overview */}
        <section className="py-8 sm:py-10 md:py-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif items-start">

            {/* Year */}
            <div className="sm:col-span-1 lg:col-start-1 lg:col-span-3">
              <h4 className="text-lg md:text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b">
                Year
              </h4>
              <p className="text-base md:text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2026
              </p>
            </div>

            {/* Intro Summary */}
            <p className="col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-6 text-base sm:text-lg md:text-[20px] text-black/90 font-light leading-tight">
              This visualization was developed during the Final Synthesis Design Studio at Politecnico di Milano.<br /><br />
              Since 1930, the Museum of Modern Art’s Department of Painting and Sculpture has acquired over 4,000 works. As the museum’s oldest department, a historical dive into its acquisitions and curatorial choices shows how the museum has changed its vision of modern art and what is worthy of being shown in their facilities.
            </p>

            <p className="col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-6 text-base sm:text-lg md:text-[20px] text-black/90 font-light leading-tight">
              In recent years, MoMA’s Department of Painting and Sculpture has expanded its acquisitions beyond traditional painting and sculpture to include more installations, textiles, and works on paper. Rather than focusing primarily on newly created contemporary works as it did in earlier decades, the Department now increasingly acquires older pieces with a longer gap between creation and acquisition, with most additions concentrated between March–June and September–December.
            </p>


          </div>
        </section>
<section className="py-8 sm:py-10 md:py-[50px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif">
    {/* Overview Image 1 */}
    <div className="col-span-1 sm:col-span-1 lg:col-span-6 aspect-[3/4] w-full overflow-hidden border border-[#acadb2] bg-[#ffffff]">
      <img
        src="/images/dataviz/viz1.png"
        alt="Data visualization overview"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Overview Image 2 */}
    <div className="col-span-1 sm:col-span-1 lg:col-span-6 aspect-[3/4] w-full overflow-hidden border border-[#acadb2] bg-[#ffffff]">
      <img
        src="/images/dataviz/mockup.jpg"
        alt="Data visualization mockup"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

        {/* The Backstory */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start pt-8 pb-4 sm:py-10 md:py-[50px] my-2 md:my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-8 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            Sources
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The data was taken from the Museum of Modern Art (MoMA) official dataset, periodically updated and publicly available on GitHub.  This research dataset contains more than 160,000 records, representing all of the works that have been accessioned into MoMA’s collection and cataloged in the database. It includes basic metadata for each work, including title, artist, date made, medium, dimensions, and date acquired by the Museum.

              The list of curators and the creation of new departments come from MoMA’s official website. The list of departments was filtered to only show those that remain in existence today, excluding those that have been merged or closed.

            </p>
          </div>
        </section>





      </main>
    </div>
  );
}