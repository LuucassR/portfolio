import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ResponsiveImage } from './ResponsiveImage';

interface OptimizedCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  priority?: boolean;
  showNavigation?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function OptimizedCarousel({
  images,
  alt,
  className = "",
  priority = false,
  showNavigation = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000
}: OptimizedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());

  const handleNext = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 50); // Small delay for smooth transition
  }, [isTransitioning, images.length]);

  const handlePrevious = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning, images.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning, currentIndex]);

  // Preload next and previous images
  useEffect(() => {
    const preloadAdjacentImages = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      
      const newPreloaded = new Set(preloadedImages);
      newPreloaded.add(nextIndex);
      newPreloaded.add(prevIndex);
      
      setPreloadedImages(newPreloaded);
    };

    preloadAdjacentImages();
  }, [currentIndex, images.length, preloadedImages]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, handleNext, images.length]);

  if (images.length === 0) {
    return (
      <div className={`relative aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 dark:text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <ResponsiveImage
            src={images[currentIndex]}
            alt={alt}
            className="w-full h-full"
            priority={priority && currentIndex === 0}
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showNavigation && images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${
                index === currentIndex
                  ? "w-8 h-2 bg-white shadow-lg"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Loading indicator */}
      {isTransitioning && (
        <div className="absolute top-4 right-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
