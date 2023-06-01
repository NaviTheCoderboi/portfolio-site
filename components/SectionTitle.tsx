import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

interface SectionTitleProps {
	titleNo: string;
	title: string;
}

const SectionTitle = ({ titleNo, title }: SectionTitleProps) => {
	return (
		<div
			className={`${poppins.className} text-2xl font-semibold flex items-center text-slate-300`}
		>
			<span className="text-base md:text-lg text-purple-500 mr-2">
				{titleNo}.
			</span>{" "}
			{title}
			<span className="hidden md:inline-flex md:w-60 lg:w-72 h-[3px] bg-gray-700 ml-6"></span>
		</div>
	);
};

export default SectionTitle;
