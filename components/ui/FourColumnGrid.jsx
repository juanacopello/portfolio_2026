export default function FourColumnGridSection() {
  const items = [
    {
      id: 1,
      image: '/images/legisladores/hover-1.png',
      alt: 'Interface Detail 1',
      kicker: 'Session Setup',
      title: 'Profile Calibration',
    },
    {
      id: 2,
      image: '/images/legisladores/hover-2.png',
      alt: 'Interface Detail 2',
      kicker: 'Telemetry',
      title: 'Real-Time SER',
    },
    {
      id: 3,
      image: '/images/legisladores/hover-3.png',
      alt: 'Interface Detail 3',
      kicker: 'Activities',
      title: 'Story Generation',
    },
    {
      id: 4,
      image: '/images/legisladores/seccion-2.png',
      alt: 'Interface Detail 4',
      kicker: 'Evaluation',
      title: 'Aggregated Metrics',
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-12">
      {/* 12-column grid: 1 col on mobile, 2 on tablet, each spans 3 cols on desktop (4x3=12) */}
      <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="sm:col-span-3 lg:col-span-3 flex flex-col group"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 border border-black/10 mb-3">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Editorial Metadata */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0063C5]">
                {item.kicker}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-black/90 leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}