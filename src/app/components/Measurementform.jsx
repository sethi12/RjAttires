// "use client";

// import { useState } from "react";

// export default function Measurementform() {
//   return (
//     <section className="py-16">
//       <div className="mx-auto max-w-4xl px-4">

//         {/* Heading */}
//         <h1 className="text-2xl md:text-3xl font-semibold mb-4">
//           Stitching Information – The Fashion Station
//         </h1>

//         <p className="text-sm text-gray-600 mb-8">
//           Kindly fill the required information and send it to us with regards to
//           your stitching order. All values must be entered in Inches or Feet
//           as per our requirements.
//         </p>

//         {/* FORM */}
//         <form className="space-y-6">

//           {/* Order Number */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               What is the Order Number? *
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full border px-4 py-3"
//             />
//           </div>

//           {/* Measurement Type */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Have you taken the measurements using Body or Garment? *
//             </label>
//             <div className="flex gap-6">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="measurementType" required />
//                 Garment
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="measurementType" required />
//                 Body
//               </label>
//             </div>
//           </div>

//           {/* Height */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               What is your height in Feet and Inches? *
//             </label>
//             <input
//               type="text"
//               required
//               placeholder="e.g. 5 ft 6 in"
//               className="w-full border px-4 py-3"
//             />
//           </div>

//           {/* Measurements Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {[
//               "Bust In Inches",
//               "Top Length in Inches",
//               "Waist in Inches",
//               "Hips in Inches",
//               "Sleeves in Inches",
//               "Neck Width in Inches (Front & Back)",
//               "Thigh Width (Circumference in Inches)",
//               "Knee Width (Circumference in Inches)",
//               "Bottom Length in Inches",
//             ].map((label, index) => (
//               <div key={index}>
//                 <label className="block text-sm font-medium mb-1">
//                   {label} *
//                 </label>
//                 <input
//                   type="number"
//                   required
//                   className="w-full border px-4 py-3"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Sleeve Type */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Type of Sleeves *
//             </label>
//             <select required className="w-full border px-4 py-3">
//               <option value="">Select</option>
//               <option>Umbrella</option>
//               <option>3/4</option>
//               <option>Full</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Bottom Type */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Type of Bottom *
//             </label>
//             <select required className="w-full border px-4 py-3">
//               <option value="">Select</option>
//               <option>Trouser</option>
//               <option>Churidar</option>
//               <option>Shalwar</option>
//               <option>Parallel</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Personal Info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Your Name *
//               </label>
//               <input type="text" required className="w-full border px-4 py-3" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Phone Number *
//               </label>
//               <input type="tel" required className="w-full border px-4 py-3" />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               E-mail *
//             </label>
//             <input type="email" required className="w-full border px-4 py-3" />
//           </div>

//           {/* Additional Info */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Any Other Information you would like to give?
//             </label>
//             <textarea
//               rows="4"
//               className="w-full border px-4 py-3"
//             />
//           </div>

//           {/* Terms */}
//           <div className="flex items-start gap-3">
//             <input type="checkbox" required className="mt-1" />
//             <p className="text-sm text-gray-600">
//               By Clicking Submit Button – You agree to Terms & Conditions available on{" "}
//               <a
//                 href=""
//                 target="_blank"
//                 className="underline"
//               >
//                 this link
//               </a>. *
//             </p>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="bg-black text-white px-10 py-3 text-sm tracking-wide hover:bg-gray-800"
//           >
//             SUBMIT
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function Measurementform() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4">
        {/* Card Container */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-xl">
          {/* Heading */}
          <div className="border-b pb-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Stitching Information
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Kindly fill the required information. All values must be entered
              in <span className="font-semibold">Inches or Feet</span> as per
              requirements.
            </p>
          </div>

          <form className="space-y-8">
            {/* Top Section: Order & Height Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Order Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. #12345"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Height (ft/in) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 ft 6 in"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>
            </div>

            {/* Measurement Type: Radio Grid */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 text-center">
                Measurement Basis *
              </label>
              <div className="flex justify-center gap-12">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="measurementType" required className="w-4 h-4 accent-black" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Garment</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="measurementType" required className="w-4 h-4 accent-black" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Body</span>
                </label>
              </div>
            </div>

            {/* Main Measurements Grid */}
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-l-4 border-black pl-3">
                Measurements
              </h2>
              [Image of garment measurement points for a custom dress]
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  "Bust (Inches)",
                  "Top Length (Inches)",
                  "Waist (Inches)",
                  "Hips (Inches)",
                  "Sleeves (Inches)",
                  "Neck Width (Front/Back)",
                  "Thigh Width (Circum)",
                  "Knee Width (Circum)",
                  "Bottom Length (Inches)",
                ].map((label, index) => (
                  <div key={index}>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1 uppercase tracking-tighter">
                      {label} *
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:border-black outline-none transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dropdowns Flex Grid Section */}
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-l-4 border-black pl-3">
                Style Preferences
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Type of Sleeves *
                  </label>
                  <select required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white appearance-none cursor-pointer">
                    <option value="">Select Sleeve Type</option>
                    <option>Umbrella</option>
                    <option>3/4</option>
                    <option>Full</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Type of Bottom *
                  </label>
                  <select required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white appearance-none cursor-pointer">
                    <option value="">Select Bottom Type</option>
                    <option>Trouser</option>
                    <option>Churidar</option>
                    <option>Shalwar</option>
                    <option>Parallel</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" required className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address *</label>
                <input type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-3" />
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Any Other Special Instructions?
              </label>
              <textarea
                rows="4"
                placeholder="e.g. Specific neck design or pocket requirements..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-black outline-none transition-all"
              />
            </div>

            {/* Submit Section */}
            <div className="flex flex-col items-center gap-6 py-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1 w-4 h-4 accent-black" />
                <p className="text-xs text-gray-500 text-center max-w-md">
                  I agree to the <a href="#" className="underline font-bold text-black">Terms & Conditions</a> regarding stitching services and custom measurements.
                </p>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-16 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-gray-900 transition-colors shadow-lg"
              >
                SUBMIT INFORMATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}