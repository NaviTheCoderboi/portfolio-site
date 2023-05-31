"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

const Introduction = () => {
	return (
		<section
			id="home"
			className="max-w-[1140px] mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
		>
			<motion.h3
				className={`text-lg ${poppins.className} tracking-wide text-purple-500`}
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				Hi, my name is
			</motion.h3>
			<motion.h1
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}
				className={`text-4xl lg:text-6xl ${poppins.className} font-semibold flex flex-col text-slate-300`}
			>
				Navinder Singh.{" "}
				<span className="mt-2 lgl:mt-4">
					I am a passionate 14-year-old school boy.
				</span>
			</motion.h1>
			<motion.p
				className="text-base md:max-w-[650px] text-slate-300 font-medium"
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				{" "}
				Hello! I am a 14-year-old high school student from India with a passion
				for both medicine and web development. i aspire to become a doctor and a
				skilled web developer, combining my love for science and technology to
				make a positive impact in the world.
			</motion.p>

			<motion.button
				className={`w-52 h-14 text-sm ${poppins.className} border border-purple-500 rounded-md text-slate-300 tracking-wide hover:text-purple-500 duration-300`}
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<Link href="/Blog">Check out latest posts!</Link>
			</motion.button>
		</section>
	);
};

export default Introduction;
