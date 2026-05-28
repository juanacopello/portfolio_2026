import Image from "next/image";
import ProjectSection from '@/components/sections/ProjectSection';
import ResumeSection from '@/components/sections/ResumeSection';
import Footer from '@/components/sections/Footer';


export default function Home() {
  return (
    <div className="bg-[var(--bg-color)] dark:bg-black">

      <div className="h-screen flex flex-col">
  <header className="w-full px-6 md:px-18 py-5 items-center grid md:grid-cols-12 gap-8 border-b border-black/70 bg-[#cf1031e6]">
    <h1 className="col-span-6 md:col-span-4 text-[40px] font-sans-serif-2 text-[#ffffff] font-thin tracking-tight">Juana Copello</h1>
  </header>

  <section className="flex-1" style={{ backgroundColor: 'var(--bg-color)' }}>
    <div className="max-w-[1500px] px-6 py-10 md:py-20 md:px-18 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-[5rem]">

        <div className="md:col-span-4 space-y-4">
          <p className="text-[16px] md:text-[18px] leading-tight text-black/90 font-light font-sans-serif">
            I am a freelance visual journalist and data visualization web developer from Argentina currently based in Italy, studying a Master in Science in Communication Design at Politecnico di Milano. Before that, I worked for five years at the Visual Storytelling and Graphics Team at La Nación in Buenos Aires. I was also an Adjunct Professor at the Universidad Torcuato Di Tella's Design School, where I taught introductory coding and data visualization classes.
          </p>
        </div>

        <div className="mt-4 md:mt-0 md:col-span-4 space-y-4">
          <p className="text-[16px] md:text-[18px] leading-tight font-sans-serif font-light text-black/90">
            I have provided data visualization consulting and development services to clients such as the European Council on Foreign Relations, the United Nations Population Fund, and Fundar. <br /><br />
            This website is in English, but I am a native Spanish speaker and I also talk Italian.
          </p>
        </div>

        {/* <div className="hidden md:block md:col-span-4">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src="/images/your-image.jpg"
              alt="Project detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  </section>
</div>

     
      <main className="w-full">

        {/* Section 2: Projects or About */}



        <ProjectSection />
        <Footer />
      </main>
    </div>
  );
}
