"use client"
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from "react";
import Trendingsection from '../components/Trendingsection';
import Aboutsection from '../components/Aboutsection';
import UspSection from '../components/Uspsection';
import Collections from '../components/Collections';
import ReviewsSection from '../components/ReviewSection';

function page() {
    const sections = [
    {
      type: "carousel",
      images: [
        { src: "/co1.png", link: "/shop/new-arrivals" },
        { src: "/co2.png", link: "/shop/winter-collections" },
        { src: "/co3.png", link: "/sale" },
      ],
    },
    {
      type: "image",
      src: "/single1.png",
      link: "/shop/summer-collections",
    },
    {
      type: "image",
      src: "/single2.png",
      link: "/shop/festive-collections",
    },
    {
      type: "image",
      src: "/single3.png",
      link: "/about",
    },
  ];

return (
    <main className="w-full">
      {/* Top Sections */}
      <div className="flex flex-col gap-10 py-6">
        {sections.map((section, index) => {
          if (section.type === "carousel") {
            return <Carousel key={index} images={section.images} />;
          }
            
        //   return (
        //     <Link key={index} href={section.link} className="block">
        //       <img
        //         src={section.src}
        //         alt=""
        //         className="mx-auto w-full max-w-7xl object-contain"
        //       />
        //     </Link>
        //   );
        })}
      </div>
        <Collections/>
        
      {/* 🔥 TRENDING SECTION */}
     <Trendingsection/>
        <div className="flex flex-col gap-10 py-6">
        {sections.map((section, index) => {
          if (section.type === "image") {
         return (
            <Link key={index} href={section.link} className="block">
              <img
                src={section.src}
                alt=""
                className="mx-auto w-full max-w-7xl object-contain"
              />
            </Link>
          );
          }
            
          
        })}
      </div>
        <UspSection/>
      <ReviewsSection/>
    </main>
  );
}
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Image Wrapper */}
      <div className="relative">
        {images.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`block transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <img
              src={item.src}
              alt=""
              className="w-full object-contain"
            />
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-3">
        {/* {images.map((_, index) => (
          // <button
          //   key={index}
          //   onClick={() => setCurrent(index)}
          //   className={`w-3 h-3 rounded-full transition ${
          //     index === current ? "bg-black" : "bg-gray-400"
          //   }`}
          // />
        ))} */}
      </div>
    </div>
  );
}

export default page
