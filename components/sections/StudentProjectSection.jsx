import ProjectCard from '@/components/ui/ProjectCard';
import ProjectCardMobile from '@/components/ui/ProjectCardMobile';
import { projectsPolimiData } from '@/data/projectsPolimi';

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[var(--bg-color)]">
      <h3 className='font-sans-serif-2 px-12 py-5 text-[20px] font-bold border-t border-b border-black/70 uppercase text-center md:text-left'>Projects at Politecnico</h3>
      <div className="mx-12 mx-5 px-1 pt-[2vh] my-10">
        {/* <h3>La Nacion</h3>
        <p className="text-[var(--text-body)] font-sans-serif font-normal">
          From 2019 until 2025 I investigated, wrote, coded and designed for the Visual Storytelling & Graphics Team at La Nación, one of the largest media outlets in Argentina.
        </p> */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20 gap-y-10 mt-[5vh]">
            <ProjectCard project={projectsPolimiData[0]} />
          </div>          
        </div>
      </div>
    </section>
  );
}