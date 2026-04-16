import { useEffect, useRef } from 'react';
import { preloadImages } from './useImageCache';

export function useStrategicPreload(imageUrls: string[], options: {
  priority?: number;
  threshold?: number;
} = {}) {
  const { priority = 1, threshold = 0.5 } = options;
  const hasPreloaded = useRef(false);

  useEffect(() => {
    if (hasPreloaded.current || imageUrls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            // Preload images when section is about to become visible
            preloadImages(imageUrls.slice(0, priority * 2)).catch(console.error);
            hasPreloaded.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    // Observe the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, [imageUrls, priority, threshold]);
}
