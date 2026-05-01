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
        <main className="md:col-span-9 py-10">
          {/* Your scrolling content here */}
          <section className="w-full aspect-video bg-gray-100 mb-12">
             <img src="/images/ecfr-large.jpg" className="w-full h-full object-cover" />
          </section>
        </main>

      </div>
    </div>
  );
}