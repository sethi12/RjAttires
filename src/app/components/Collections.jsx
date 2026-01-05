// import React from 'react'
// import Link from 'next/link';
// import { motion } from "framer-motion";

// function Collections() {
//   const collections = [
//     {
//       title: "Winter Collection",
//       subtitle: "save up to 40% off",
//       image: "wintercollection.jpg",
//       link: "/shop/winter-collections",
//       bg: "bg-gradient-to-r from-gray-300 to-gray-100",
//     },
//     {
//       title: "Summer Collection",
//       subtitle: "Save up to 10% off",
//       image: "summercollection.jpg",
//       link: "/shop/summer-collections",
//       bg: "bg-gradient-to-r from-green-100 to-green-50",
//     },
//     {
//       title: "Festive Collection",
//       subtitle: "Save up to 30% off",
//       image: "festivecollection.jpg",
//       link: "/shop/festive-collections",
//       bg: "bg-gradient-to-r from-yellow-100 to-yellow-50",
//     },
//   ];

//   // Animation variants for the stagger effect
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15, // Time between each item appearing
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0, 
//       transition: { duration: 0.5, ease: "easeOut" } 
//     },
//   };

//   return (
//     <section className="py-12 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4">
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {collections.map((item, index) => (
            
            
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className={`
//                 ${item.bg}
//                 group
//                 flex flex-row
//                 items-center justify-between
//                 px-6 py-4
//                 min-h-[180px]
//                 overflow-hidden
//                 cursor-pointer
//                 transition-shadow duration-300
//                 hover:shadow-xl
//               `}
//             >
//               {/* Text */}
//               <div className="w-2/3 pr-3 z-10">
//                 <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-black">
//                   {item.title}
//                 </h3>
//                 <p className="text-xs md:text-sm mb-4 text-gray-700 font-medium">
//                   {item.subtitle}
//                 </p>
//                 <Link
//                   href={item.link}
//                   className="
//                     inline-block bg-black text-white
//                     px-5 py-2 text-xs font-bold tracking-widest
//                     transition-all duration-300
//                     hover:bg-gray-800
//                     active:scale-95
//                   "
//                 >
//                   SHOP NOW
//                 </Link>
//               </div>

//               {/* Image */}
//               <div className="w-1/3 flex justify-end">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//                     h-28 sm:h-32 md:h-40 object-contain
//                     transition-transform duration-700 ease-in-out
//                     group-hover:scale-110 group-hover:-rotate-3
//                   "
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Collections;


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
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="flex flex-wrap gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="
                relative group overflow-hidden rounded-xl
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
                <h3 className="text-xl font-bold text-black leading-tight">
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
                    px-3 py-3
                    text-[10px] font-bold tracking-widest
                    rounded
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
