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
              <h2 className="text-lg uppercase font-bold font-sans-serif">Concept</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                Here you can explain the deeper technical challenges or the reporting 
                process. Since this section is 9 columns wide, your text has room to breathe.
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
              <h2 className="text-lg uppercase font-bold font-sans-serif">Outcome</h2>
              <p className="text-md text-black/90 leading-tight font-sans-serif font-light">
                Describe the results of the project. This part will keep scrolling 
                while the sidebar on the left stays right where it is.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
      <figure className="aspect-square bg-gray-100">
        <img src="/image1.jpg" className="w-full h-full object-cover" alt="Detail 1" />
      </figure>
      <figure className="aspect-square bg-gray-100">
        <img src="/image2.jpg" className="w-full h-full object-cover" alt="Detail 2" />
      </figure>
    </div>
          </section>

          {/* Footer space to allow scrolling past the sidebar */}
          <footer className="h-[20vh]" />
        </main>

      </div>
    </div>
  );
}