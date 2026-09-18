import ProjectCard from '@/components/ui/ProjectCard';
import ProjectCardMobile from '@/components/ui/ProjectCardMobile';
import { projectLaNacionData } from '@/data/projectsLaNacion';
import Link from 'next/link';


export default function ProjectSection() {
  return (
    <section className="p-6 max-w-[1400px] mx-auto">
      <h2 className="font-sans-serif text-[35px] tracking-tighter font-[400] border-b-2">Case Studies</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 grid-flow-dense gap-x-6 gap-y-5 auto-rows-[220px] mt-10">

    {/* Weaving Truths (Cols 1-6, Rows 1-2) */}
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
              Weaving Truths
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A game about xxxx
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
              Weaving Truths
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A game about xxxx
            </h3>
          </div>
        </Link>

        {/* Inflation Game (Cols 5-7, Rows 3-4) */}
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
              Weaving Truths
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A game about xxxx
            </h3>
          </div>
        </Link>

        {/* Covid-19 Vaccines (Cols 1-6, Rows 5 & 6) */}
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
              Weaving Truths
            </p>
            <h3 className="text-[30px] md:text-2xl font-sans-serif leading-tight font-[350]">
              A game about xxxx
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}