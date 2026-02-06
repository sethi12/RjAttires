

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Collections() {
    const pathname = usePathname();
      const isShopPage = pathname.includes("/shop");
  const collections = [
    {
      title: "Winter Collection",
      subtitle: "Save up to 40% off",
      image: "/wintercollection2.jpg",
      link: "/shop/winter-collections",
    },
    {
      title: "Summer Collection",
      subtitle: "Save up to 10% off",
      image: "/summercollection2.jpg",
      link: "/shop/summer-collections",
    },
    {
      title: "Festive Collection",
      subtitle: "Save up to 30% off",
      image: "/festivecollection2.jpg",
      link: "/shop/festive-collections",
    },
  ];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -60, // comes from side
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
<section className="px-4 sm:px-6 md:px-0 py-0 md:py-10">

  <div className="mx-auto max-w-7xl">


    {!isShopPage && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mb-5"
      >
        <div className="flex-grow border-t border-black" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase whitespace-nowrap">
          Shop By Collections
        </h2>
        <div className="flex-grow border-t border-black" />
      </motion.div>
    )}

    {/* Cards Container */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-6"
    >
      {collections.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="
            relative group overflow-hidden 
            w-97.5 h-47.5 gap-5
            cursor-pointer
          "
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-700 ease-in-out
              group-hover:scale-110
            "
          />

          {/* Content */}
          <Link
          href={item.link}
          >
          <div className="relative z-10 h-full w-full p-4 flex flex-col justify-center">
            <h3 className="text-xl text-black leading-tight">
              {item.title}
            </h3>

            <p className="text-xs text-black mb-2">
              {item.subtitle}
            </p>

            <button
             
              className="
                inline-block w-fit
                mt-5
                bg-black text-white
                px-3.5 py-2
                h-10
                text-[10px] font-semibold tracking-widest
              "
            >
              SHOP NOW
            </button>
          </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

  );
}

export default Collections;
