'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const navigation = [
    { name: "Home", link: "" },
    { name: "Services", link: "services" },
    { name: "Blog", link: "blog" },
    { name: "Contact", link: "contact" }
  ];

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(`/${link}`);
    setOpen(false);
  }

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          <img src="/logo.png" className="h-20 w-30" />
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => setOpen(!open)}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition-all duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>

        <div className="hidden md:flex gap-8 mr-5 font-medium">
          {navigation.map((item) => (
            <a key={item.name} href={"/" + item.link}>{item.name}</a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-20 left-0 w-full bg-white transition-transform duration-300 ease-in-out ${open ? "transform translate-x-0" : "transform -translate-x-full"} md:hidden`}>
        <div className="flex flex-col items-center py-4">
          {navigation.map((item) => (
            <button key={item.name} onClick={() => handleNavigation(item.link)} className="py-2 text-lg font-medium">
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}