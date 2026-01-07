import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
function Trendingsection() {
      const TrendingSection =[
    {
      name:"KARANDI",
      image:"karandi.png",
      link:"/shop",
      price:"17900"

    },
     {
      name:"Winter Luxe-25",
      image:"winterluxe.png",
      link:"/shop",
      price:"12500"

    }, {
      name:"Massarat-25",
      image:"massrat.png",
      link:"/shop",
      price:"30900"

    }
  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card
      },
    },
  };

  // Animation variant for each individual card
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };
  return (
   <section className="py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-10 text-center"
        >
          Trending Products
        </motion.h2>

        {/* Animated Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-10"
        >
          {TrendingSection.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={item.link} className="group block">
                {/* Image */}
                <div className="w-full overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="mt-4 flex justify-between items-start text-sm">
                  {/* Left */}
                  <div>
                    <h3 className="font-semibold tracking-wide uppercase">
                      {item.name}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="text-right text-gray-500">
                    <p className="text-xs uppercase">Starting Rs:</p>
                    <p className="text-sm font-medium text-gray-700">
                      {item.price}.00
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Trendingsection
