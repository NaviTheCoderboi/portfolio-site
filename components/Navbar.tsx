"use client";
import React from "react";
import Image from "next/image";
import { Logo } from "@/public";
import Link from "next/link";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

const Navbar = () => {
	return (
		<nav className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 px-4 backdrop-blur transition-colors duration-500 bg-transparent">
			<div
				className={`max-w-[1440px] h-full mx-auto py-1  flex items-center justify-between ${poppins.className}`}
			>
				<Link href="/">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Image src={Logo} alt="logo" className="w-[4rem]" />
					</motion.div>
				</Link>
				<div className="hidden md:inline-flex items-center gap-7">
					<div className="flex gap-7">
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href="#home"
								className="flex items-center gap-1 font-medium text-slate-300 hover:text-purple-500 cursor-pointer duration-300"
							>
								Home
							</Link>
						</motion.div>
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.1 }}
						>
							<Link
								href="#about"
								className="flex items-center gap-1 font-medium text-slate-300 hover:text-purple-500 cursor-pointer duration-300"
							>
								<span className="text-purple-500">01.</span> About
							</Link>
						</motion.div>
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href="#home"
								className="flex items-center gap-1 font-medium text-slate-300 hover:text-purple-500 cursor-pointer duration-300"
							>
								<span className="text-purple-500">02.</span> Projects
							</Link>
						</motion.div>
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							<Link
								href="#home"
								className="flex items-center gap-1 font-medium text-slate-300 hover:text-purple-500 cursor-pointer duration-300"
							>
								<span className="text-purple-500">03.</span> Contact
							</Link>
						</motion.div>
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							<Link
								href="#home"
								className="flex items-center gap-1 font-medium text-slate-300 hover:text-purple-500 cursor-pointer duration-300"
							>
								<span className="text-purple-500">04.</span> Blog
							</Link>
						</motion.div>
					</div>
					<Link href="https://github.com/NaviTheCoderboi" target="__blank">
						<motion.button
							className="px-4 py-2 rounded-md text-slate-300 text-[13px] border border-purple-500 hover:text-purple-500 duration-300"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							Site src
						</motion.button>
					</Link>
				</div>
				<div className="w-8 h-6 flex flex-col justify-between items-center md:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
					<span className="w-full bg-purple-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300 h-[2px]"></span>
					<span className="w-full bg-purple-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300 h-[2px]"></span>
					<span className="w-full bg-purple-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300 h-[2px]"></span>
					<span className="w-full bg-purple-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300 h-[2px]"></span>
					<span className="w-full bg-purple-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300 h-[2px]"></span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
