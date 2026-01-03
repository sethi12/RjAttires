import React from 'react'

function ContactForm() {
  return (
    <main className="w-full">
      {/* ADDRESS SECTION */}
      <section className="py-5">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-1.5">
          <h2 className="text-xl font-semibold">Address</h2>

          <p className="text-gray-700">
            B-191 Next To Bikaner Wala, Industrial Area Phase-1 <br />
            Naraina Vihar, 110028
          </p>

          <p className="text-gray-800">
            <span className="font-semibold">Call us at:</span>{" "}
            +91 9311000666
          </p>

          <p className="text-gray-800">
            <span className="font-semibold">Write to us at</span>{" "}
            Rooplabhatia@yahoo.com
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-medium text-center mb-12">
            CONTACT US
          </h2>

          <form className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Phone No.
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 px-4 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">
                Email Id
              </label>
              <input
                type="email"
                className="w-full border border-gray-400 px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-400 px-4 py-3 resize-none focus:outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="bg-gray-600 text-white px-10 py-3 text-sm tracking-widest hover:bg-gray-700"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactForm
