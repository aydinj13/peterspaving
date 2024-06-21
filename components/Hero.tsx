"use client"

import { useState } from 'react'



export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src="images/heroimage.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-40"
          />
        </div>


        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            The Premium Paving People
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
            Peters Paving is dedicated to providing top-notch paving solutions for residential and commercial properties in the Greater Toronto Area (GTA).
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-gradient-to-r from-indigo-600 to-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get a FREE Quote
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-black">
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}