"use client"

import { useState } from 'react'



export default function Navbar() {

    const navigation = [
        { name: "Home", link: "#" },
        { name: "Services", link: "services" },
        { name: "Blog", link: "blog" },
        { name: "Contact", link: "contact" }
    ]
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="#">
                    <img src="logo.png" className="h-20 w-30" />
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex gap-8 mr-5 font-medium">
                {navigation.map((item) => (
                <a href={item.link}>{item.name}</a>
              ))}
                </div>
            </div>
        </nav>
    )
}