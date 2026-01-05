"use client";

import { useState } from "react";

export default function Measurementform() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Stitching Information – The Fashion Station
        </h1>

        <p className="text-sm text-gray-600 mb-8">
          Kindly fill the required information and send it to us with regards to
          your stitching order. All values must be entered in Inches or Feet
          as per our requirements.
        </p>

        {/* FORM */}
        <form className="space-y-6">

          {/* Order Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              What is the Order Number? *
            </label>
            <input
              type="text"
              required
              className="w-full border px-4 py-3"
            />
          </div>

          {/* Measurement Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Have you taken the measurements using Body or Garment? *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="measurementType" required />
                Garment
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="measurementType" required />
                Body
              </label>
            </div>
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium mb-1">
              What is your height in Feet and Inches? *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 5 ft 6 in"
              className="w-full border px-4 py-3"
            />
          </div>

          {/* Measurements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Bust In Inches",
              "Top Length in Inches",
              "Waist in Inches",
              "Hips in Inches",
              "Sleeves in Inches",
              "Neck Width in Inches (Front & Back)",
              "Thigh Width (Circumference in Inches)",
              "Knee Width (Circumference in Inches)",
              "Bottom Length in Inches",
            ].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">
                  {label} *
                </label>
                <input
                  type="number"
                  required
                  className="w-full border px-4 py-3"
                />
              </div>
            ))}
          </div>

          {/* Sleeve Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Type of Sleeves *
            </label>
            <select required className="w-full border px-4 py-3">
              <option value="">Select</option>
              <option>Umbrella</option>
              <option>3/4</option>
              <option>Full</option>
              <option>Other</option>
            </select>
          </div>

          {/* Bottom Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Type of Bottom *
            </label>
            <select required className="w-full border px-4 py-3">
              <option value="">Select</option>
              <option>Trouser</option>
              <option>Churidar</option>
              <option>Shalwar</option>
              <option>Parallel</option>
              <option>Other</option>
            </select>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name *
              </label>
              <input type="text" required className="w-full border px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input type="tel" required className="w-full border px-4 py-3" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              E-mail *
            </label>
            <input type="email" required className="w-full border px-4 py-3" />
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Any Other Information you would like to give?
            </label>
            <textarea
              rows="4"
              className="w-full border px-4 py-3"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" />
            <p className="text-sm text-gray-600">
              By Clicking Submit Button – You agree to Terms & Conditions available on{" "}
              <a
                href="https://www.thefashionstation.in/product/stitching-service-1/"
                target="_blank"
                className="underline"
              >
                this link
              </a>. *
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-10 py-3 text-sm tracking-wide hover:bg-gray-800"
          >
            SUBMIT
          </button>

        </form>
      </div>
    </section>
  );
}
