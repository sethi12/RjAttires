"use client"
import React from "react";
import { Box, ShieldCheck, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function UspSection() {
  // Animation settings for a "light/small" feel
  const fadeInUp = {
    initial: { opacity: 0, y: 30 }, // Small movement from bottom to top
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Item 1 */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-center"
          >
            <Box size={36} className="mb-4 text-gray-800" />
            <h3 className="text-lg font-semibold mb-2">
              10% OFF for New Users
            </h3>
            <p className="text-gray-500 text-sm">
              Orders from all item.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }} // Slight delay
            className="flex flex-col items-center"
          >
            <ShieldCheck size={36} className="mb-4 text-gray-800" />
            <h3 className="text-lg font-semibold mb-2">
              Secure payment
            </h3>
            <p className="text-gray-500 text-sm">
              100% Secure payment.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }} // Longer delay
            className="flex flex-col items-center"
          >
            <MessageSquare size={36} className="mb-4 text-gray-800" />
            <h3 className="text-lg font-semibold mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-500 text-sm">
              Dedicated support.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}