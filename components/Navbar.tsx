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

  const services = [
    { name: "Driveways", link: "services/driveways" },
    { name: "Patios", link: "services/patios" },
    { name: "Porches", link: "services/porches" },
    { name: "Pathways", link: "services/pathways" },
    { name: "Wash & Seal", link: "services/wash-and-seal" },
    { name: "Interlock Repairs", link: "services/interlock-repairs" },
    { name: "Hardscaping", link: "services/hardscaping" },
    { name: "Retaining Wall", link: "services/retaining-wall" },
  ];

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(`/${link}`);
    setOpen(false);
  };

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center relative z-50">
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          <img src="/logo.png" className="h-20 w-30" alt="Logo" />
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
            <div key={item.name} className="relative group">
              <a
                href={"/" + item.link}
                className="hover:text-indigo-500 flex items-center"
                onClick={(e) => {
                  if (item.name === "Services") {
                    handleNavigation(item.link);
                  }
                }}
              >
                {item.name}
                {item.name === "Services" && (
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </a>
              {item.name === "Services" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={"/" + service.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(service.link);
                      }}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full">
          {navigation.map((item) => (
            <div key={item.name} className="w-full">
              {item.name === "Services" ? (
                <div className="flex flex-col w-full items-center">
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className="py-4 text-lg font-medium w-full text-center hover:bg-gray-200"
                  >
                    {item.name}
                  </button>
                  <div className="flex flex-col w-full items-center">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleNavigation(service.link)}
                        className="py-2 text-lg font-medium w-full text-center hover:bg-gray-200"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(item.link)}
                  className="py-4 text-lg font-medium w-full text-center hover:bg-gray-200"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}