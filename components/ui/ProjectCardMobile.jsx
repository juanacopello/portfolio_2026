export default function ProjectCardMobile({ project }) {
  const hasExplanation = project.explanation === true;

  return (
    <article className="group relative col-span-1 lg:col-span-2">
      <a
        href={project.link}
        target={hasExplanation ? "_self" : "_blank"}
        rel={hasExplanation ? undefined : "noopener noreferrer"}
        /* Keeps the stacked layout */
        className="flex flex-col transition-opacity hover:opacity-70"
      >
        {/* Changed from w-full to w-1/2, and added mx-auto to center it */}
        <div className="w-full mx-auto overflow-hidden h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text wrapper stays full width */}
        <div className="w-full mt-3 md:mt-4">
          {/* Increased mobile text size from 13px to 16px */}
          <h4 className="text-[15px] md:text-[15px] font-sans-serif font-light text-black line-clamp-2 leading-[1.2] md:leading-[1.1]">
            {project.title}
          </h4>
          
          {hasExplanation ? (
            /* Increased mobile text size from 10px to 12px */
            <div className="mt-1.5 md:mt-1 text-[12px] md:text-[12px] font-sans-serif font-semibold uppercase text-[var(--text-title)] flex items-center gap-1">
              <span>How we did it</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          ) : (
            /* Increased mobile text size from 10px to 12px */
            <div className="mt-1.5 md:mt-1 text-[12px] md:text-[12px] font-sans-serif font-semibold uppercase text-[var(--text-title)] flex items-center gap-1">
              <span>Go to article</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          )}
        </div>
      </a>
    </article>
  );
}