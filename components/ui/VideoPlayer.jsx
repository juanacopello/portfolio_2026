'use client';
import { useRef, useState } from 'react';

export default function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  className = '',
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleScrub = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
    setProgress((newTime / video.duration) * 100);
  };

  return (
    <div
      onClick={togglePlay}
      className={`relative group cursor-pointer select-none overflow-hidden bg-zinc-100 border border-black/10 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover block"
      />

      {/* Center Play Indicator (visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Minimal Bottom-Right Control Pills (fade in on hover/touch or when paused) */}
      <div
        className={`absolute bottom-3 right-3 flex items-center gap-1.5 transition-opacity duration-200 ${
          isPlaying ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="px-2.5 py-1 bg-white/90 hover:bg-[#DCFE52] text-black text-[11px] font-sans-serif uppercase tracking-wider font-medium border border-black/15 backdrop-blur-sm transition-colors"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

    
      </div>

      {/* Interactive Scrubbing Progress Bar along the bottom edge */}
      <div
        onClick={handleScrub}
        className="absolute bottom-0 left-0 w-full h-2 flex items-end cursor-pointer group/bar"
      >
        <div className="w-full h-[3px] group-hover/bar:h-[5px] bg-black/20 transition-all">
          <div
            className="h-full bg-[#0054a8] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}