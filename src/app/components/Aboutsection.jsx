import React from "react";
import { motion } from "framer-motion";

function Aboutsection() {
  return (
    <section className="py-1 overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll during animation */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image - Slides in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <img
              src="aboutimage.png" 
              alt="About RJ Attires"
              className="w-full object-contain rounded-tl-[150px] rounded-br-[150px]"
            />
          </motion.div>

          {/* Right Content - Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              About RJ Attires
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
             At Rj Attires, we believe that elegance is timeless and nothing captures 
             that elegance better than a beautifully crafted Pakistani suit. Our brand
              is dedicated to bringing you the most exquisite collection of
               women’s and girls’ Pakistani suits, designed to combine traditional 
               artistry with modern fashion trends.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
            Founded with a passion for authentic craftsmanship and a love for ethnic fashion,
             Rj Attires has become a trusted name for those who appreciate sophistication, grace,
              and comfort in every outfit. Our goal is simple to make premium-quality Pakistani suits 
            accessible to every woman and girl who wishes to embrace her culture with confidence and style.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Rj Attires, our customers are at the heart of everything we do. We continuously
               strive to provide an exceptional shopping experience from browsing our latest
                collections to receiving your perfectly packed order at your doorstep.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Aboutsection;