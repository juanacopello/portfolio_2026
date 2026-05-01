import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* ASIDE: 3 columns */}
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-10 py-10 space-y-8">
            
            {/* --- BACK BUTTON --- */}
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black no-underline hover:opacity-70 transition-all"
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
              <p className="text-sm text-gray-500 mt-2">European Council on Foreign Relations</p>
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
          <section className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Concept</h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
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
              <h2 className="text-xl font-medium">Outcome</h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Describe the results of the project. This part will keep scrolling 
                while the sidebar on the left stays right where it is.
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