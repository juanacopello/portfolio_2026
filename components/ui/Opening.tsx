"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

interface TrailItem {
  x: number;
  y: number;
  type: number;
}

export default function Opening() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: p5 | null = null;
    let isCancelled = false;

    import("p5").then((p5Module) => {
      if (isCancelled || !containerRef.current) return;
      const P5 = p5Module.default;

      const sketch = (p: p5) => {
        const trail: TrailItem[] = [];
        let distanceMoved = 0;
        const stepThreshold = 130;
        let currentImageIndex = 0;

        let prevX = 0;
        let prevY = 0;
        let hasMoved = false;

        // Controls the gradual removal once 7 images are exceeded
        const maxVisibleBeforeClear = 7;
        const framesBetweenRemovals = 6; // Lower = faster pop-off, Higher = slower pop-off
        let removeTimer = 0;

        type P5Image = Awaited<ReturnType<p5["loadImage"]>>;
        let images: P5Image[] = [];

        p.setup = async () => {
          const w = containerRef.current?.offsetWidth || p.windowWidth;
          const h = containerRef.current?.offsetHeight || p.windowHeight;
          p.createCanvas(w, h);
          p.imageMode(p.CENTER);
          p.noStroke();

          images = await Promise.all([
            p.loadImage("/images/shapes/code.svg"),
            p.loadImage("/images/shapes/narrative.svg"),
            p.loadImage("/images/shapes/dataviz.svg"),
            p.loadImage("/images/shapes/design.svg"),
          ]);
        };

        p.windowResized = () => {
          if (!containerRef.current) return;
          p.resizeCanvas(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        };

        p.draw = () => {
          p.clear();

          if (images.length === 0) return;

          // 1. Spawn new images as the cursor moves
          if (
            p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height
          ) {
            if (!hasMoved) {
              prevX = p.mouseX;
              prevY = p.mouseY;
              hasMoved = true;
            }

            const d = p.dist(p.mouseX, p.mouseY, prevX, prevY);
            distanceMoved += d;

            if (distanceMoved >= stepThreshold) {
              trail.push({
                x: p.mouseX,
                y: p.mouseY,
                type: currentImageIndex,
              });

              currentImageIndex = (currentImageIndex + 1) % images.length;
              distanceMoved = 0;
            }

            prevX = p.mouseX;
            prevY = p.mouseY;
          }

          // 2. Gradually remove the oldest images (no fade) once more than 7 are on screen
          if (trail.length > maxVisibleBeforeClear) {
            removeTimer++;
            if (removeTimer >= framesBetweenRemovals) {
              trail.shift(); // Removes the oldest image cleanly (instant pop-off)
              removeTimer = 0;
            }
          } else {
            removeTimer = 0;
          }

          // 3. Draw all active images at 100% solid opacity (oldest to newest)
          for (let i = 0; i < trail.length; i++) {
            const item = trail[i];
            const img = images[item.type];

            if (img && img.width > 0) {
              const targetWidth = 150;
              const targetHeight = (img.height / img.width) * targetWidth;
              p.image(img, item.x, item.y, targetWidth, targetHeight);
            }
          }
        };
      };

      p5Instance = new P5(sketch, containerRef.current);
    });

    return () => {
      isCancelled = true;
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}