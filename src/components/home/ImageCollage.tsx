"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ImageCollage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const imagesList = [
    {
      src: "https://res.cloudinary.com/duvttd9ju/image/upload/v1724174217/goonj_group_jpg_ca14e8bacd.webp",
      width: 400,
      height: 400,
      left: 0.2,
      top: 0.2,
    },
    {
      src: "https://res.cloudinary.com/duvttd9ju/image/upload/v1724216420/cpc_img_png_e4f5c5ae0e.webp",
      width: 400,
      height: 400,
      left: 1,
      top: 0.1,
    },
    {
      src: "https://res.cloudinary.com/duvttd9ju/image/upload/v1724216420/prahelika_img_png_3941289588.webp",
      width: 400,
      height: 400,
      left: 0.1,
      top: 0.9,
    },
    {
      src: "https://res.cloudinary.com/duvttd9ju/image/upload/v1724216420/rday_img_JPG_780a8d1453.webp",
      width: 400,
      height: 400,
      left: 0.8,
      top: 0.8,
    },
    {
      src: "https://res.cloudinary.com/duvttd9ju/image/upload/v1724250189/farewell_24_jpg_81c44ef572.webp",
      width: 400,
      height: 400,
      left: 0.5,
      top: 0.4,
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="h-[800px] sticky overflow-hidden">
        {imagesList.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute ${hoveredIndex === index ? "z-999" : ""}`}
            style={{
              width: image.width,
              height: image.height,
              left: `${image.left * 50}%`,
              top: `${image.top * 50}%`,
              zIndex: hoveredIndex === index ? 999 : "auto",
            }}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.2, rotate: -500 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 2, delay: index * 1 },
              },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={imagesList[index].src}
              alt={`Collage image ${index + 1}`}
              className="w-full h-full object-cover rounded-xl border-4 border-slate-400 p-2 shadow-lg hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:scale-105 transform transition-transform duration-300 ease-in-out cursor-pointer backdrop-blur-sm"
              loading="lazy"
              style={{
                // filter: hoveredIndex === index ? "" : "grayscale(20%)",
                objectFit: "cover",
                objectPosition: "50% 20%",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
