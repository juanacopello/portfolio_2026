"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const move = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-[var(--text-title)] -translate-x-1/2 -translate-y-1/2"
    />
  );
}