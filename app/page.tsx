import Image from "next/image";
import ProjectSection from '@/components/sections/ProjectSection';
import ResumeSection from '@/components/sections/ResumeSection';


export default function Home() {
  return (
    <div className=" min-h-screen  bg-zinc-50 dark:bg-black">
      {/* Section 1: Hero / Introduction */}
      {/* <section className="h-screen w-full grid grid-cols-12 bg-[#3c55ab]">
          <h1 className="text-[4rem] text-white col-span-12">Juana Copello</h1>
          <h2 className="text-[2rem] text-white col-span-12">Visual Journalist, Data Visualization Developer & Designer</h2>
        </section> */}

      <header className="w-full px-6 py-5 items-center grid grid-cols-12 gap-8">
        <h1 className="col-span-4 text-4xl font-bold">Juana Copello</h1>

        <nav className="col-span-6 space-x-4">
          <ul className="flex gap-6">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen w-full">

        {/* Section 2: Projects or About */}


        <section className="mx-auto max-w-[1500px] px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* Columns 1-3: Text */}
            <div className="md:col-span-4 space-y-4">
              <p className="text-2xl leading-relaxed text-gray-600 font-grotesk">
                I am a freelance visual journalist and data visualization web developer from Argentina currently based in Italy, studying a Master in Science in Communication Design at Politecnico di Milano.   <span className="text-[#ec4137]">Before that, I worked for five years at the Visual Storytelling and Graphics Team at La Nación in Buenos Aires. </span>I was also an Adjunct Professor at the Universidad Torcuato Di Tella's Design School, where I taught introductory coding and data visualization classes.<br /><br />
              </p>
            </div>

            {/* Columns 7-9: Text */}
            <div className="md:col-span-4 space-y-4">
              <p className="text-2xl leading-tight text-gray-600 font-grotesk">
                <span className="text-[#ec4137]">I have also provided data visualization consulting and development services to clients such as the European Council on Foreign Relations, the United Nations Population Fund, and Fundar. </span><br /><br />
                <span className="text-[#3c55ab]">This website is in English,</span> but I am a native Spanish speaker and I also talk Italian.
              </p>
            </div>

            {/* Columns 4-6: Image */}
            <div className="md:col-span-4">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src="/images/your-image.jpg"
                  alt="Project detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>



          </div>
        </section>
        {/* <section className="h-screen w-full bg-white px-6">
          <div className="grid grid-cols-12 gap-8 pt-[4rem]">
            <div className="col-span-5">
              <p className="text-2xl">Hola!</p>
              <p className="text-2xl leading-tight">
                <span className="text-[#3c55ab]">I am a freelance visual journalist and data visualization web developer from Argentina currently based in Italy, studying a Master in Science in Communication Design at Politecnico di Milano. </span><br /><br />
                <span className="text-[#ec4137]">Before that, I worked for five years at the Visual Storytelling and Graphics Team at La Nación in Buenos Aires. </span>I was also an Adjunct Professor at the Universidad Torcuato Di Tella's Design School, where I taught introductory coding and data visualization classes.<br /><br />
                <span className="text-[#ec4137]">I have also provided data visualization consulting and development services to clients such as the European Council on Foreign Relations, the United Nations Population Fund, and Fundar. </span><br /><br />
                <span className="text-[#3c55ab]">This website is in English,</span> but I am a native Spanish speaker and I also talk Italian.
              </p>
            </div>

            <div className="col-span-5"></div>
          </div>
        </section> */}
        <ProjectSection />
        <ResumeSection />
      </main>
    </div>
  );
}
