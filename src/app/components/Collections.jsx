

import React from "react";
import Link from "next/link";

function Collections() {
  const collections = [
    {
      title: "Winter Collection",
      subtitle: "Save up to 40% off",
      image: "/wintercollection.jpg",
      link: "/shop/winter-collections",
    },
    {
      title: "Summer Collection",
      subtitle: "Save up to 10% off",
      image: "/summercollection.jpg",
      link: "/shop/summer-collections",
    },
    {
      title: "Festive Collection",
      subtitle: "Save up to 30% off",
      image: "/festivecollection.jpg",
      link: "/shop/festive-collections",
    },
  ];

  return (
<section className="px-10 py-0 md:px-0 md:py-10">

      <div className="mx-auto max-w-7xl px-4">
        
        <div className="flex flex-wrap gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="
                relative group overflow-hidden 
                w-97.5 h-47.5 gap-5
                cursor-pointer
              "
            >
              {/* Image as background */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-110
                "
              />

              {/* Dark overlay for readability */}
              {/* <div className="absolute inset-0 bg-black/30"></div> */}

              {/* Content on image */}
              <div className="relative z-10 h-full w-full p-4 flex flex-col justify-center">
                <h3 className="text-xl  text-black leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-black mb-2">
                  {item.subtitle}
                </p>

                <Link
                  href={item.link}
                  className="
                    inline-block w-fit
                    bg-black text-white
                    px-5.5 py-3
                    h-10
                    text-[10px] font-semibold  tracking-widest
                    
                    transition
                    
                  "
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Collections;
