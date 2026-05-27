import ProjectCard from '@/components/ui/ProjectCard';
import ProjectCardMobile from '@/components/ui/ProjectCardMobile';
import { projectData } from '@/data/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="mt-20 bg-[var(--bg-color)]">
      <h2 className="text-[var(--text-title)] font-serif text-3xl px-18 py-5 border-b border-t border-black/70 font-semibold">Projects</h2>

      <div className="mx-12 mx-5 px-1 pt-[5vh] my-10">
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20 gap-y-10">
            <ProjectCard project={projectData[0]} />
            <ProjectCard project={projectData[1]} />
            <ProjectCard project={projectData[2]} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20 gap-y-10">
            <ProjectCardMobile project={projectData[3]} />
            <ProjectCardMobile project={projectData[4]} />
            <ProjectCardMobile project={projectData[11]} />
          </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20 gap-y-10">
            <ProjectCard project={projectData[5]} />
            <ProjectCard project={projectData[6]} />
          </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20 gap-y-10">
            <ProjectCard project={projectData[7]} />
            <ProjectCard project={projectData[8]} />
          </div>
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-[5rem] mb-20">
            <ProjectCardMobile project={projectData[9]} />
            <ProjectCardMobile project={projectData[10]} />
          </div>
          
        </div>
      </div>
    </section>
  );
}