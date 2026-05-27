import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">

        {/* ASIDE: 3 columns */}
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-10 py-10 space-y-8">

            {/* --- BACK BUTTON --- */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Home
            </Link>

            <div>
              <h1 className="text-2xl font-bold uppercase leading-tight">
                The Data Collection Project
              </h1>
              <p className="text-sm text-gray-500 mt-2">La Nación</p>
            </div>

            {/* Rest of your sidebar content... */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Role</h4>
                <p className="text-sm">Web Development, Data Visualization</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN: 9 columns */}
        <main className="md:col-span-9 py-10 space-y-12">
          {/* Hero Image */}
          <section className="w-full aspect-video bg-gray-100 overflow-hidden rounded-sm">
            <img
              src="/images/ecfr-large.jpg"
              alt="Full view"
              className="w-full h-full object-cover"
            />
          </section>

          {/* Project Details / Narrative */}
          <section className=" space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Context</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                Children with neurodevelopmental disorders (NDDs) often experience difficulties in recognizing, interpreting, and expressing emotions, which can hinder social interaction and emotional development. Therapists working with these children require tools that are not only engaging and accessible for the child, but also capable of providing structured feedback and measurable indicators of progress over time. Traditional therapeutic activities may lack personalization, adaptability, or systematic data collection, limiting their effectiveness and scalability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100">
                <img src="/images/detail-1.jpg" alt="Detail" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-100">
                <img src="/images/detail-2.jpg" alt="Detail" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Proposal</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                This project proposes a web-based therapeutic support application designed specifically for therapists
                and children with NDDs. The primary requirement of the system is to support emotional learning
                through interactive activities that adapt to the child’s emotional state while remaining simple,
                intuitive, and non-intrusive. The application must also allow therapists to easily manage child profiles,
                initiate sessions, and monitor progress through clear and meaningful statistics.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">User experience</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                From a user experience perspective, the application is centered around a guided storytelling approach. During a session, the child interacts with an avatar that tells an automatically generated story, asks questions, and proposes simple mini-games. The story content is dynamically generated using large language models and is adapted to one or more emotions detected from the child’s speech through a speech emotion recognition module. The interactions are deliberately designed to be short, visual, and repetitive, making them accessible to children with varying cognitive abilities. The therapist remains in control of the session flow and can decide whether to rely on automatic emotion detection or manually select emotional themes.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Technologies used</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                From a technological standpoint, the system is built using a MERN stack architecture, ensuring modularity and scalability. Speech Emotion Recognition (SER) is handled by a dedicated Python microservice based on deep learning model (Emozionalmente). If the child is impaired and not able to speak properly, a textual input is proposed from which Text-Based emotion recognition is performed to elicit the necessary features. While story generation and interaction logic are orchestrated by the backend using a Large Language Model (Gemini Flash 2.5). Specifically, this was chosen by considering the computational speed, output quality, and cost of service. The application records structured interaction data, which is later aggregated into statistics that reflect the child’s performance across different emotions, sessions, and activity types. This separation of concerns allows the system to evolve by incorporating new models, new mini-games, or alternative storytelling strategies without major architectural changes.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">Value proposition</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                The value proposition of the chosen solution lies in its ability to combine emotional assessment,
                adaptive content generation, and progress tracking into a single integrated platform. For children, the
                application provides engaging, personalized experiences that encourage emotional awareness in a
                playful and supportive environment. For therapists, it offers a data-driven tool that complements
                traditional therapy by providing objective insights into emotional recognition skills over time. By
                bridging emotional engagement and measurable outcomes, the system aims to enhance therapeutic
                effectiveness while maintaining flexibility and ease of use.
              </p>
            </div>
               <div className="space-y-4">
              <h2 className="text-lg uppercase font-bold font-sans-serif">My role</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
              xxx
              </p>
            </div>
          </section>

          {/* Footer space to allow scrolling past the sidebar */}
          <footer className="h-[20vh]" />
        </main>

      </div>
    </div>
  );
}