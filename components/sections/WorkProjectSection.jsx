
import { projectLaNacionData } from '@/data/projectsLaNacion';
import Link from 'next/link';


export default function ProjectSection() {
  return (
    <section className="p-6 max-w-[1400px] mx-auto mb-24">
      <h2 className="font-sans-serif text-[35px] tracking-tighter font-[400] border-b-2">Case Studies</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-10 mt-10">

    {/* Weaving Truths (Cols 1-6, Rows 1-2) */}
       <Link
          href="/weaving-truths"
          className="md:col-span-3 lg:col-span-5 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/miniaturas/transporte.png"
              alt="Weaving Truths"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[15px] tracking-tight font-sans-serif font-[100] group-hover:underline">
              Weaving Truths
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A game inspired by the complexity of nature
            </h3>
          </div>
        </Link>

        

        {/* Heat Islands (Cols 1-4, Rows 3-4) */}
      <Link
          href="/heat-islands"
          className="md:col-span-3 lg:col-span-6 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/miniaturas/transporte.png"
              alt="Weaving Truths"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[15px] tracking-tight font-sans-serif font-[100] group-hover:underline">
              Heat Islands
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              An article about the impact of climate change in cities
            </h3>
          </div>
        </Link>

        {/* Inflation Game (Cols 5-7, Rows 3-4) */}
          <Link
          href="/inflation-game"
          className="md:col-span-3 lg:col-span-6 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/miniaturas/transporte.png"
              alt="Weaving Truths"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[15px] tracking-tight font-sans-serif font-[100] group-hover:underline">
              Inflation
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A quiz to reflect upon the distortion of prices
            </h3>
          </div>
        </Link>

        {/* Covid-19 Vaccines (Cols 1-6, Rows 5 & 6) */}
          <Link
          href="/covid-vaccines"
          className="md:col-span-3 lg:col-span-6 group block"
        >
          <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-200 mb-3">
            <img
              src="/miniaturas/transporte.png"
              alt="Weaving Truths"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[15px] tracking-tight font-sans-serif font-[100] group-hover:underline">
              Covid-19
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A visual explainer of how each one of the vaccines work
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}