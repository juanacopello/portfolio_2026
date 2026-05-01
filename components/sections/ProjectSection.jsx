import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectData } from '@/data/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto mx-5 px-6">
        <h2>Projects</h2>
        {Object.entries(projectData).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h3 className="mb-10 text-lg font-bold uppercase font-grotesk tracking-wide text-black">
              {category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-8">
              {items.map((item, idx) => (
                <ProjectCard key={idx} project={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}