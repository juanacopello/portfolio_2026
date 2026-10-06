'use client';

import React, { useState } from 'react';

const SLIDES = [
  {
    id: 1,
    image: '/images/legisladores/hover-1.png',
    alt: 'Therapy Avatar Interface',
    kicker: 'Interface Prototype',
    title: 'Guided Storytelling Avatar',
    description: 'The interactive avatar adapts spoken narratives according to real-time emotional cues recorded from the child.',
  },
  {
    id: 2,
    image: '/images/legisladores/hover-2.png',
    alt: 'Session Analytics Dashboard',
    kicker: 'Therapist Dashboard',
    title: 'Session Analytics & Tracking',
    description: 'Therapists monitor emotional stability metrics and speech recognition confidence scores aggregated over time.',
  },
  {
    id: 3,
    image: '/images/legisladores/hover-3.png',
    alt: 'Micro-games and exercises',
    kicker: 'Interactive Activities',
    title: 'Low-Friction Emotion Mini-Games',
    description: 'Visual, repetitive puzzles help children identify and validate facial expressions without cognitive overwhelm.',
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const current = SLIDES[currentIndex];

  return (
    <div className="w-full max-w-[1000px] mx-auto select-none">
      {/* Slide Image Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-100 rounded-xl overflow-hidden border border-black/10">
        <img
          src={current.image}
          alt={current.alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          →
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Caption (Kicker, Subtitle, Short Paragraph) */}
      <div className="mt-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-black/10 pb-4">
        <div className="space-y-1 max-w-xl">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0063C5]">
            {current.kicker}
          </span>
          <h4 className="text-lg font-semibold tracking-tight text-black/90">
            {current.title}
          </h4>
          <p className="text-sm font-light text-zinc-600 leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Slide Counter */}
        <span className="text-xs font-mono text-zinc-400 self-start md:self-auto">
          0{currentIndex + 1} / 0{SLIDES.length}
        </span>
      </div>
    </div>
  );
}