import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">

        {/* ASIDE: 4 columns */}
        <aside className="md:col-span-4 md:border-r border-black/70">
          <div className="md:sticky md:top-10 py-6 md:py-10 space-y-6 md:space-y-8 px-6">

            {/* --- BACK BUTTON --- */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>

            <div>
              <h1 className="text-xl md:text-2xl leading-none font-sans-serif-2 font-semibold tracking-tight text-black/90">
                Sami, a web application for therapists working with children with NDDs
              </h1>
              <p className="text-[14px] md:text-[14px] text-[#484848] font-sans-serif uppercase">Politecnico di Milano</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Lesson</h4>
                <p className="text-sm font-sans-serif font-light">Advanced User Interfaces</p>
              </div>

              <div className='leading-none'>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Publication Date</h4>
                <p className="text-sm font-sans-serif font-light">Year 1. Semester 1. <br />(Nov. 2025 - Feb. 2026)</p>
              </div>

              <div>
                <h4 className="text-[12px] font-bold leading-[1.3] font-sans-serif uppercase">Co-Authors</h4>
                <p className="text-sm font-sans-serif font-light">Claudio Costantini, Miguel Sierra, and Emanuele Turbanti</p>
              </div>

              {/* <button className="text-[var(--text-title)] border-3 border-[var(--text-title)] py-2 px-4 hover:bg-[var(--text-title)] hover:text-white transition-all cursor-pointer font-sans-serif font-bold text-[12px] uppercase mt-4">
                <a href="https://www.lanacion.com.ar/politica/mapa-de-fidelidad-mileista-el-sinuoso-juego-de-los-gobernadores-en-la-era-del-no-hay-plata-nid18102024/" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button> */}
            </div>
          </div>
        </aside>

        {/* MAIN: 8 columns */}
        <main className="md:col-span-8 py-6 md:py-10 space-y-8 md:space-y-12">
          <section className="grid grid-cols-4 md:grid-cols-8 gap-y-6 md:gap-y-8">
            {/* 
            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img
                src="/images/legisladores/seccion-1.png"
                alt="Full view"
                className="w-full h-auto object-cover"
              />
            </div> */}

            <div className="overflow-hidden col-span-4 md:col-span-7">
              <video
                src="/images/sami/video_sami.mp4"
                playsInline
                controls
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div>

            {/* Context */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                Children with neurodevelopmental disorders (NDDs) often experience difficulties in recognizing, interpreting, and expressing emotions, which can hinder social interaction and emotional development. Therapists working with these children require tools that are not only engaging and accessible for the child, but also capable of providing structured feedback and measurable indicators of progress over time. Traditional therapeutic activities may lack personalization, adaptability, or systematic data collection, limiting their effectiveness and scalability.
              </p>
            </div>

            {/* Structure */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Concept</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                This project proposes a web-based therapeutic support application designed specifically for therapists
                and children with NDDs. The primary requirement of the system is to support emotional learning
                through interactive activities that adapt to the child’s emotional state while remaining simple,
                intuitive, and non-intrusive. The application must also allow therapists to easily manage child profiles,
                initiate sessions, and monitor progress through clear and meaningful statistics.
              </p>
            </div>

            <div className="overflow-hidden col-span-4 md:col-span-6">
              <img
                src="/images/legisladores/seccion-2.png"
                alt="Full view"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Visualizing legislators' votes */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">User Experience</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                The application is centered around a guided storytelling
                approach. During a session, the child interacts with an avatar that tells an automatically generated
                story, asks questions, and proposes simple mini-games. The story content is dynamically generated
                using large language models and is adapted to one or more emotions detected from the child’s
                speech through a speech emotion recognition module. The interactions are deliberately designed to
                be short, visual, and repetitive, making them accessible to children with varying cognitive abilities. The
                therapist remains in control of the session flow and can decide whether to rely on automatic emotion
                detection or manually select emotional themes.
              </p>
            </div>

            {/* 3-image grid */}
            <div className="col-span-4 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-[15px] md:gap-[30px] my-[20px] md:my-[40px]">
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-1.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-2.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden col-span-1 md:col-span-2">
                <img src="/images/legisladores/hover-3.png" alt="Detail" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Interactivity */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Technologies Used</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                From a technological standpoint, the system is built using a MERN stack architecture, ensuring
                modularity and scalability. Speech Emotion Recognition (SER) is handled by a dedicated Python
                microservice based on deep learning model (Emozionalmente). If the child is impaired and not able to
                speak properly, a textual input is proposed from which Text-Based emotion recognition is performed
                to elicit the necessary features. While story generation and interaction logic are orchestrated by the
                backend using a Large Language Model (Gemini Flash 2.5). Specifically, this was chosen by
                considering the computational speed, output quality, and cost of service.
                The application records structured interaction data, which is later aggregated into statistics that
                reflect the child’s performance across different emotions, sessions, and activity types. This separation
                of concerns allows the system to evolve by incorporating new models, new mini-games, or alternative
                storytelling strategies without major architectural changes.
              </p>
            </div>

            {/* My role */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Value Proposition</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                This solution combines emotional assessment,
                adaptive content generation, and progress tracking into a single integrated platform. For children, the
                application provides engaging, personalized experiences that encourage emotional awareness in a
                playful and supportive environment. For therapists, it offers a data-driven tool that complements
                traditional therapy by providing objective insights into emotional recognition skills over time. By
                bridging emotional engagement and measurable outcomes, the system aims to enhance therapeutic
                effectiveness while maintaining flexibility and ease of use.
              </p>
            </div>

             {/* My role */}
            <div className="space-y-4 col-span-4 md:col-span-7">
              <h2 className="text-lg uppercase font-bold font-sans-serif">My Role</h2>
              <p className="text-md text-black/90 leading-[1.3] font-sans-serif font-light">
                This solution combines emotional assessment,
                adaptive content generation, and progress tracking into a single integrated platform. For children, the
                application provides engaging, personalized experiences that encourage emotional awareness in a
                playful and supportive environment. For therapists, it offers a data-driven tool that complements
                traditional therapy by providing objective insights into emotional recognition skills over time. By
                bridging emotional engagement and measurable outcomes, the system aims to enhance therapeutic
                effectiveness while maintaining flexibility and ease of use.
              </p>
            </div>

          </section>
        </main>

      </div>
    </div>
  );
}