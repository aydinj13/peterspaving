import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							<span className="text-indigo-600">Peter&apos;s</span><span className="text-green-500">{" "}Paving</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
                        <a href="/services/driveways">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Driveways
						</li>
                        </a>
                        <a href="/services/patios">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Patios
						</li>
                        </a>
                        <a href="/services/porches">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Porches
						</li>
                        </a>
                        <a href="/services/pathways">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Pathways
						</li>
                        </a>
                        <a href="/services/wash-and-seal">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Wash & Seal
						</li>
                        </a>
                        <a href="/services/interlock-repairs">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Interlock Repairs
						</li>
                        </a>
                        <a href="/services/hardscaping">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Hardscaping
						</li>
                        </a>
                        <a href="/services/retaining-wall">
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Retaining Wall
						</li>
                        </a>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Blog</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Post #1
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Post #2
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Post #3
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Post #4
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Post #5
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
							Contact Us
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2024 Peter&apos;s Paving CA. All Rights Reserved. | <a href="https://croduct.com"><span className="text-indigo-600"><u>Powered by Croduct Web Design</u></span></a>
			
				</h1>
			</div>
		</>
	);
}

export default Footer;