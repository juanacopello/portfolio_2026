// components/ProjectCard.jsx

export default function ProjectCard({ project }) {
  const hasExplanation = project.explanation === true; 
  return (
    <article className="group relative col-span-3">
      <a
        href={project.link}
        target={project.explanation !== true ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image Container */}
        <div className="relative group overflow-hidden">
          {/* The Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* THE BORDER: This div sits exactly on top of the image */}
          <div className="absolute inset-0 border-0 border-black transition-all duration-300 ease-in-out group-hover:border-[2px] group-hover:border-[#3c55ab] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="mt-4 px-1">
          <h4 className="text-[1rem] font-light text-black line-clamp-2 font-grotesk leading-[1.1]">
            {project.title}
          </h4>
          <p className="mt-2 text-[0.75rem] font-light uppercase font-grotesk text-black">
            {project.published}
          </p>
        </div>

{/* If hasExplanation is true, the div is rendered */}
      {hasExplanation && (
        <div className="mt-8 text-[12px] font-light uppercase font-grotesk text-black">
          Behind the scenes: Click to read more
        </div>
      )}
      </a>
    </article>
  );
}