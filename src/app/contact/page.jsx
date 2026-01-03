import React from 'react'
import ContactForm from '../components/ContactForm'

function page() {
  return (
   <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading with lines */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-grow border-t border-black" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase">
           NEED HELP?
          </h2>
          <div className="flex-grow border-t border-black" />
   
        </div>
        </div>
               <ContactForm/>
    </section>
  )
}

export default page
