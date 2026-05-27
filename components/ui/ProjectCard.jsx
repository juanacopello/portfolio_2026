export default function ProjectCard({ project }) {
  const hasExplanation = project.explanation === true;

  return (
    <article className="group relative col-span-1 lg:col-span-4">
      <a
        href={project.link}
        target={hasExplanation ? "_self" : "_blank"}
        rel={hasExplanation ? undefined : "noopener noreferrer"}
        className="block transition-opacity hover:opacity-70"
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full mt-3 md:mt-4">
          {/* Increased mobile text from 13px to 15px */}
          <h4 className="text-[15px] md:text-[15px] font-sans-serif font-light text-black line-clamp-2 leading-[1.2] md:leading-[1.1]">
            {project.title}
          </h4>
          
          {hasExplanation ? (
            /* Increased mobile text from 10px to 12px */
            <div className="mt-1.5 md:mt-1 text-[12px] md:text-[13px] font-sans-serif font-semibold uppercase text-[var(--text-title)] flex items-center gap-1">
              <span>How we did it</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          ) : (
            /* Increased mobile text from 10px to 12px */
            <div className="mt-1.5 md:mt-1 text-[12px] md:text-[13px] font-sans-serif font-semibold uppercase text-[var(--text-title)] flex items-center gap-1">
              <span>Go to article</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          )}
        </div>
      </a>
    </article>
  );
}