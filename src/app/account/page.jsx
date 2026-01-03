"use client";

import { useState } from "react";

export default function Page() {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 p-8">
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-6">
          My Account
        </h1>

        {/* Toggle Buttons */}
        <div className="flex mb-8">
          <button
            onClick={() => setMode("login")}
            className={`w-1/2 py-2 text-sm font-medium border-b-2 ${
              mode === "login"
                ? "border-black text-black"
                : "border-transparent text-gray-400"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`w-1/2 py-2 text-sm font-medium border-b-2 ${
              mode === "signup"
                ? "border-black text-black"
                : "border-transparent text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {mode === "login" && (
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border px-4 py-3 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-sm tracking-wide"
            >
              LOGIN
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {mode === "signup" && (
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border px-4 py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border px-4 py-3 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-sm tracking-wide"
            >
              CREATE ACCOUNT
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t" />
          <span className="px-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t" />
        </div>

        {/* Google Auth Button */}
        <button
          className="w-full border py-3 text-sm flex items-center justify-center gap-3 hover:bg-gray-50"
        >
          <img
            src="google-icon.png"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </div>
    </div>
  );
}
