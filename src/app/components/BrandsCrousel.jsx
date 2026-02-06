// "use client";


// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef,useEffect ,useState} from "react";
// import { getBrands } from "../../../services/client.service";

// function BrandsCrousel() {
//   // const brands = [
//   //   { name: "Qalamkar", image: "/qalamakar.png" },
//   //   { name: "Gul Ahmed", image: "/kulahmed.png" },
//   //   { name: "Zaha", image: "/zaha.png" },
//   //   { name: "Maria B", image: "/maria.jpg" },
//   //   { name: "crimson", image: "/crimson.png" },
//   //   {name:"noor",image:"/noorlogo.png"},
//   //   {name:"rangrasiya",image:"/rangrasiya.png"},
//   //   {name:"ZaraShahJhan",image:"/ZaraShahjhan.png"}
//   // ];

//    const [brands, setBrands] = useState([]);
//      /* FETCH BRANDS */
//     useEffect(() => {
//       fetchBrands();
//     }, []);
  
//     const fetchBrands = async () => {
//       try {
//         const data = await getBrands();
//         setBrands(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let animationId;
//     let scrollSpeed = 0.5; // lower = slower

//     const scroll = () => {
//       container.scrollLeft += scrollSpeed;

//       // Reset scroll for infinite loop
//       if (
//         container.scrollLeft >=
//         container.scrollWidth - container.clientWidth
//       ) {
//         container.scrollLeft = 0;
//       }

//       animationId = requestAnimationFrame(scroll);
//     };

//     animationId = requestAnimationFrame(scroll);

//     // Pause on hover
//     const stop = () => cancelAnimationFrame(animationId);
//     const start = () => (animationId = requestAnimationFrame(scroll));

//     container.addEventListener("mouseenter", stop);
//     container.addEventListener("mouseleave", start);

//     return () => {
//       cancelAnimationFrame(animationId);
//       container.removeEventListener("mouseenter", stop);
//       container.removeEventListener("mouseleave", start);
//     };
//   }, []);

//   return (
//     <section className="py-2">
//       <div className="mx-auto max-w-7xl px-4">

//         {/* Heading */}
//         <div className="flex items-center gap-6 mb-5">
//           <div className="flex-grow border-t border-black" />
//           <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
//             Shop By Brands
//           </h2>
//           <div className="flex-grow border-t border-black" />
//         </div>

//         {/* Auto Carousel */}
//         <div
//           ref={scrollRef}
//           className="
//             flex gap-14 overflow-x-hidden
//             scrollbar-hide select-none
//           "
//         >
//           {brands.map((brand, index) => (
//             <div
//               key={index}
//               className="min-w-[260px] flex justify-center"
//             >
//               <img
//                 src={brand.image}
//                 alt="brand"
//                 className="h-30 md:h-24 object-contain"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// export default BrandsCrousel;

"use client";

import { useRef, useEffect, useState } from "react";
import { getBrands } from "../../../services/client.service";

function BrandsCrousel() {
  const [brands, setBrands] = useState([]);
  const scrollRef = useRef(null);

  /* FETCH BRANDS */
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBrands();
  }, []);

  /* AUTO SCROLL (MOBILE SAFE) */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.4;

    const scroll = () => {
      container.scrollLeft += speed;

      // seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [brands]);

  // duplicate brands for infinite effect
  const loopBrands = [...brands, ...brands];

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-5">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase whitespace-nowrap">
            Shop By Brands
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="
            flex gap-12
            overflow-x-scroll
            scrollbar-hide
            select-none
          "
        >
          {loopBrands.map((brand, index) => (
            <div
              key={index}
              className="min-w-[200px] flex items-center justify-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 md:h-24 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BrandsCrousel;
