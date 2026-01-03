import React from 'react'
import Link from "next/link";
import { Phone } from "lucide-react";
function page() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading with lines */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase">
            Whatsapp
          </h2>
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* WhatsApp Icon */}
          <div className="w-20 h-20 rounded-full border-4 border-green-600 flex items-center justify-center">
               <img 
      src="/whatsapp.png" 
      alt="WhatsApp Icon" 
      className="w-12 h-12 object-contain" 
    />
          </div>

          {/* Number */}
          <Link
            href="https://wa.me/919311000666"
            target="_blank"
            className="text-xl md:text-2xl font-medium hover:underline"
          >
            +91 9311000666
          </Link>

        </div>
      </div>
    </section>
  )
}

export default page
