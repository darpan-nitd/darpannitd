"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomMediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [media] = useState([
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/Ij2h2MTqTNg?si=xhVjO-84THzyaI2b",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/KfLRPmff4is?si=irp8AplhqFV9iVse",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/duvttd9ju/video/upload/v1724251188/Final_Videos_dd059746de.mp4",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/MI5MrCG2nZ0?si=5fy8rEdahm6VsSd",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/duvttd9ju/video/upload/v1724251190/goonj_vid_593e7b0ce1.mp4",
    },
  ]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (media[(currentIndex + 2) % media.length].type === "video") {
        videoRefs.current[(currentIndex + 2) % media.length].pause();
      }
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
      if (media[(currentIndex + 3) % media.length].type === "video") {
        videoRefs.current[(currentIndex + 3) % media.length].play();
      }
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + media.length) % media.length
      );
    }
  };

  // useEffect(() => {
  //   let timer: NodeJS.Timeout;
  //   const currentMedia = media[currentIndex % media.length];

  //   if (currentMedia.type === "image") {
  //     timer = setTimeout(() => {
  //       nextSlide();
  //     }, 2000);
  //   }
  //   else if (currentMedia.type === "video") {
  //     const video = videoRefs.current[currentIndex];
  //     if (video) {
  //       video.currentTime = 0;
  //       video.play();
  //     }
  //   }

  //   return () => clearTimeout(timer);
  // }, [currentIndex + 1]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleVideoEnd = () => {
    nextSlide();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            if (
              video.paused &&
              videoRefs.current.indexOf(video) ===
                (currentIndex + 2) % media.length
            ) {
              video.play();
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, [currentIndex]);

  const getItemStyle = (index: number) => {
    const offset = ((index - currentIndex + media.length) % media.length) - 2;
    return {
      transform: `translateX(-46%) translateX(${offset * 90}px) scale(${
        1 - Math.abs(offset) * 0.1
      })`,
      zIndex: media.length - Math.abs(offset),
      opacity: 1 - Math.abs(offset) * 0.3,
      transition: "all 0.5s ease-in-out",
    };
  };

  const renderMedia = (item: any, index: number) => {
    if (item.type === "image") {
      return (
        <img
          src={item.src}
          alt={`Slide ${index + 1}`}
          className="w-[400px] h-[300px] bg-slate-200 object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      );
    } else if (item.type === "youtube") {
      const videoUrl = `${item.src}?autoplay=1&mute=1`;
      return (
        <iframe
          className="w-[400px] h-[300px] bg-slate-200 object-cover rounded-lg shadow-lg"
          key={index}
          width="400"
          height="300"
          src={videoUrl}
          title="YouTube video player"
          allow="autoplay fullscreen"
          allowFullScreen
          onEnded={handleVideoEnd}
        ></iframe>
      );
    } else if (item.type === "video") {
      return (
        <video
          ref={(el: HTMLVideoElement | null) => {
            if (el) {
              videoRefs.current[index] = el;
            }
          }}
          key={index}
          className="w-[400px] h-[300px] bg-slate-200 object-cover rounded-lg shadow-lg"
          src={item.src}
          autoPlay={index === currentIndex}
          controls
          muted
          onEnded={handleVideoEnd}
        />
      );
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden mb-7">
      <div className="relative h-64 md:h-80">
        {media.map((item, index) => (
          <div
            key={index}
            className="absolute top-0 left-1/2 w-full max-w-md"
            style={getItemStyle(index)}
          >
            {renderMedia(item, index)}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="flex justify-center mt-4">
        {media.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomMediaCarousel;
