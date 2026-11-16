import Link from 'next/link';
import VideoPlayer from '@/components/ui/VideoPlayer'

export default function ProjectDetail() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#DCFE52] overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-sans-serif text-xs font-light uppercase tracking-normal text-black no-underline hover:opacity-70 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* --- MAIN EDITORIAL CONTENT --- */}
      <main className="mx-auto max-w-[1400px] px-6 md:px-12 py-10 sm:py-12 md:py-16">
        <p className="text-base sm:text-lg md:text-[20px] font-sans-serif font-light leading-tight tracking-tight text-black/60">
          Weaving Truths
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[45px] font-bold tracking-tighter leading-tight mt-0 md:mt-[-10px]">
          A game inspired by the complexity of nature
        </h1>

        {/* Metadata & Overview */}
        <section className="py-8 sm:py-10 md:py-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 font-sans-serif items-start">
            {/* Co-Authors */}
            <div className="sm:col-span-1 lg:col-start-1 lg:col-span-3">
              <h4 className="text-lg md:text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b">
                Co-Authors
              </h4>
              <ul className="text-base md:text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                <li>Anfal Alzarraj</li>
                <li>Isabela Andrade de Oliveira e Castro</li>
                <li>Romchel M. Fuentes</li>
                <li>Susana Pérez Alves</li>
                <li>Alice Torzoni</li>
              </ul>
            </div>

            {/* Year */}
            <div className="sm:col-span-1 lg:col-start-5 lg:col-span-3">
              <h4 className="text-lg md:text-[20px] font-[600] tracking-tighter text-[#0054a8] border-b">
                Year
              </h4>
              <p className="text-base md:text-[17px] font-[500] text-black/80 font-sans-serif leading-tight pt-2 tracking-tight">
                2026
              </p>
            </div>

            {/* Intro Summary */}
            <p className="col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-6 text-base sm:text-lg md:text-[20px] text-black/90 font-light leading-snug">
              <i>Weaving Truths</i> is a two-player hybrid game developed in the context of a Design Studio at Politecnico di Milano. The game combines a physical board and a digital mobile environment, set in a fantasy world that is losing its balance. Players take on the roles of two characters and explore the world separately, each encountering different characters who offer fragmented perspectives on why things are falling apart.
            </p>

            {/* Overview Image */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-7 w-full overflow-hidden">
              <img
                src="/images/weaving/overview.jpg"
                alt="Weaving Truths Overview Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start pt-8 pb-4 sm:py-10 md:py-[50px] my-2 md:my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-8 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            Context
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              This project was created in the Complex Artifacts and System Design Studio at the Politecnico di Milano. In this lab we were tasked to develop an interactive digital narrative to raise awareness and examine how climate change, socio-economic dynamics, and policy frameworks have an impact on the agrifood system.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              After initial research, we defined that our project would address pollinator decline. Therefore, our game aimed to foster a deeper understanding of the complexity of natural systems and the interconnected relationships that sustain them. Through play, participants discover that even the smallest actions can trigger cascading effects across the entire system.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The central message of the game is that changing one element of a system inevitably affects many others, much like the butterfly effect. As players interact with the game, they experience how individual decisions influence the balance of the ecosystem, revealing both visible and hidden consequences. In this way, the game also reflects contemporary ideas of uncertainty and interconnectedness, where cause and effect are often difficult to predict.
            </p>
          </div>
        </section>

        {/* Two-Column Feature Screens */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-6 aspect-video overflow-hidden">
              <img
                src="/images/weaving/interactivity.png"
                alt="Feature Interface Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 md:col-span-6 aspect-video overflow-hidden">
              <img
                src="/images/weaving/mechanism.png"
                alt="Game Mechanism Screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Backstory */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start pt-8 pb-4 sm:py-10 md:py-[50px] my-2 md:my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-8 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            The backstory
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The game is set in a fantasy dystopian universe which is divided into two worlds. On one side, Calystrum is a technocratic world shaped by pollution, in which society is centered around a massive gold-built data center that governs how people live and work. Those who resist the system are marginalized to the city&apos;s outskirts, where communities remain connected to nature. On the other side, Noctichroma is a dark, bioluminescent dimension beneath Calystrum, connected to it through portals made out of gold, and it&apos;s home to non-human beings who generate light, electrical, and chemical energy.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              Noctichroma once existed in a symbiotic loop with Calystrum, exchanging energy and signals across the portals. But as Calystrum mines away the gold that anchors those portals and the connection weakens, affecting both worlds.
            </p>
          </div>
        </section>

        {/* Horizontal Interaction Video */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-10 lg:col-span-7 aspect-video overflow-hidden bg-zinc-100 border border-black/10">
              <VideoPlayer
                src="/images/weaving/videos/interaction.mp4"
                poster="/images/weaving/videos/poster_interaction.png"
                autoPlay
                muted
                loop
                className="col-span-1 md:col-span-10 lg:col-span-7 aspect-video"
              />
            </div>
          </div>
        </section>

        {/* The Mechanics */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start pt-8 pb-4 sm:py-10 md:py-[50px] my-2 md:my-[20px]">


          <div className="lg:col-start-1 lg:col-span-6 space-y-4">

            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              The project combines a
              diverse set of physical artifacts with a web mobile game. In this way, we can
              combine the best of both mediums: while the digital medium is more fluid
              and can easily adapt itself based on user feedback, the physical medium
              allows for a better multiplayer puzzle experience, since players can see and
              exchange information by speaking or showing it to each other, with no
              screens in between them.
            </p>
          </div>
        </section>

        {/* Elements */}
        <section className="py-4 sm:py-6">
          <figure className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-6">
              <div className="col-span-1 sm:col-span-3 md:col-span-3 overflow-hidden bg-zinc-100">
                <img
                  src="/images/weaving/board_details.jpg"
                  alt="Overview of game board"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-1 sm:col-span-3 md:col-span-3 overflow-hidden bg-zinc-100">
                <img
                  src="/images/weaving/meeting_point.jpg"
                  alt="Two pawns at meeting point in board"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-1 sm:col-span-3 md:col-span-3 overflow-hidden bg-zinc-100">
                <img
                  src="/images/weaving/noxias_assets.jpg"
                  alt="Game assets for each character"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-1 sm:col-span-3 md:col-span-3  overflow-hidden bg-zinc-100">
                <img
                  src="/images/weaving/digital_game.jpg"
                  alt="Assets with digital game"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <figcaption className="font-sans-serif text-sm sm:text-base leading-tight text-black/80">
              The project works through a set of physical and digital game components, such as a revolving board, character pawns, documents, and a mobile digital game.
            </figcaption>
          </figure>
        </section>

        {/* My Role */}
        <section className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-start pt-8 pb-4 sm:py-10 md:py-[50px] my-2 md:my-[20px]">
          <h2 className="lg:col-start-1 lg:col-span-8 text-2xl sm:text-[28px] md:text-[30px] font-sans-serif font-[600] tracking-tighter text-[#0054a8]">
            My role
          </h2>

          <div className="lg:col-start-1 lg:col-span-6 space-y-4">
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              For this prototype, I developed the four minigames featured in the digital environment, adapting the visual language established by our team’s designer. The minigames were added to create a level of challenge for the players while also complementing the overall narrative.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-black/90 font-[300] leading-tight font-sans-serif">
              To complement the narrative and add a level of challenge for the players, these puzzles offer tactile, individual challenges directly tied to earlier character interactions. We decided to leverage the mobile environment to build mechanics around device-native hardware, using p5.js alongside ml5.js for real-time camera hand-tracking, and p5-phone to tap into gyroscope and sensor data.
            </p>
          </div>
        </section>

        {/* 4-Column Vertical Minigame Videos */}
        <section className="w-full max-w-[1400px] mx-auto py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-8 sm:gap-6">

            {/* Video Card 1 */}
            <div className="sm:col-span-3 lg:col-span-3 flex flex-col max-w-[340px] mx-auto w-full sm:max-w-none">
              <VideoPlayer
                src="/images/weaving/videos/patrol-leader-demo.mp4"
                poster="/images/weaving/videos/poster_patrol_leader.png"
                autoPlay={false}
                muted={false}
                loop={true}
                className="w-full aspect-[9/16] mb-3"
              />

            </div>

            {/* Video Card 2 */}
            <div className="sm:col-span-3 lg:col-span-3 flex flex-col max-w-[340px] mx-auto w-full sm:max-w-none">
              <VideoPlayer
                src="/images/weaving/videos/secretary-demo.mp4"
                poster="/images/weaving/videos/poster_secretary.png"
                autoPlay={false}
                muted={false}
                loop={true}
                className="w-full aspect-[9/16] mb-3"
              />

            </div>

            {/* Video Card 3 */}
            <div className="sm:col-span-3 lg:col-span-3 flex flex-col max-w-[340px] mx-auto w-full sm:max-w-none">
              <VideoPlayer
                src="/images/weaving/videos/video-demo-bff.mp4"
                poster="/images/weaving/videos/poster_bff.png"
                autoPlay={false}
                muted={false}
                loop={true}
                className="w-full aspect-[9/16] mb-3"
              />

            </div>

            {/* Video Card 4 */}
            <div className="sm:col-span-3 lg:col-span-3 flex flex-col max-w-[340px] mx-auto w-full sm:max-w-none">
              <VideoPlayer
                src="/images/weaving/videos/video-maverick.mp4"
                poster="/images/weaving/videos/poster_maverick.png"
                autoPlay={false}
                muted={false}
                loop={true}
                className="w-full aspect-[9/16] mb-3"
              />

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}