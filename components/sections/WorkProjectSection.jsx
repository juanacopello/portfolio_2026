import Link from 'next/link';

export default function ProjectSection() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1400px] mx-auto mb-16 md:mb-24">
      <h2 className="font-sans-serif text-2xl sm:text-3xl md:text-[35px] tracking-tighter font-[400] leading-tight border-b-2 pb-2">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-12 mt-8 md:mt-10">

        {/* 1. Museum of Modern Art */}
        <Link
          href="/dataviz"
          className="col-span-1 md:col-span-3 lg:col-span-6 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden border border-black/15 bg-zinc-200 mb-3">
            <img
              src="/images/dataviz/captura.png"
              alt="Museum of Modern Art"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="text-sm md:text-[15px] tracking-tight font-sans-serif font-[100] leading-tight group-hover:underline">
              Museum of Modern Art
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[25px] font-sans-serif leading-tight font-[350] mt-0.5">
              Showing with data how curatorial choices changed in history
            </h3>
          </div>
        </Link>

          {/* 4. Weaving Truths (Moved Below) */}
        <Link
          href="/weaving-truths"
          className="col-span-1 md:col-span-3 lg:col-span-6 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/images/weaving/overview.jpg"
              alt="Weaving Truths"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="text-sm md:text-[15px] tracking-tight font-sans-serif font-[100] leading-tight group-hover:underline">
              Weaving Truths
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[25px] font-sans-serif leading-tight font-[350] mt-0.5">
              A game inspired by the complexity of nature
            </h3>
          </div>
        </Link>

        {/* 2. Heat Islands */}
        <Link
          href="/heat-islands"
          className="col-span-1 md:col-span-3 lg:col-span-4 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/images/islas/apertura.jpg"
              alt="Heat Islands"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="text-sm md:text-[15px] tracking-tight font-sans-serif font-[100] leading-tight group-hover:underline">
              Heat Islands
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[25px] font-sans-serif leading-tight font-[350] mt-0.5">
              An article about the impact of climate change in cities
            </h3>
          </div>
        </Link>

        {/* 3. Inflation */}
        <Link
          href="/inflation-game"
          className="col-span-1 md:col-span-3 lg:col-span-4 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/images/inflacion/responsive-design-2.jpg"
              alt="Inflation"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="text-sm md:text-[15px] tracking-tight font-sans-serif font-[100] leading-tight group-hover:underline">
              Inflation
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[25px] font-sans-serif leading-tight font-[350] mt-0.5">
              A quiz to reflect upon the distortion of prices
            </h3>
          </div>
        </Link>

      

      </div>
    </section>
  );
}