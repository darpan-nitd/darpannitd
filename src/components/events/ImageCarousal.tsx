"use client";
import { EventImages } from "@/lib/definations";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ImageCarouselProps {
  images: EventImages[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }, 1500);
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      key={currentIndex}
      ref={carouselRef}
      className="relative h-[600px] w-[600px] mx-auto overflow-hidden border-4 border-double rounded-2xl border-slate-200"
    >
      <motion.div
        className="relative w-full h-full object-cover"
        initial={{ opacity: 0.6, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.6, scale: 0.8 }}
        transition={{ duration: 1 }}
        key={currentIndex}
      >
        <img
          src={images[currentIndex].url}
          alt="carousel"
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
