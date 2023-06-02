"use client";
import { css3, html5, javascript, python, typescipt } from "@/public/";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LanguagesType {
	name: string;
	icon: any;
	color: string;
	percentage: string;
}

const Languages: LanguagesType[] = [
	{
		name: "Css",
		icon: css3,
		color: "bg-blue-500",
		percentage: "w-[60%]",
	},
	{
		name: "Html",
		icon: html5,
		color: "bg-orange-500",
		percentage: "w-[80%]",
	},
	{
		name: "Javascript",
		icon: javascript,
		color: "bg-yellow-400",
		percentage: "w-[60%]",
	},
	{
		name: "Python",
		icon: python,
		color: "bg-green-500",
		percentage: "w-[80%]",
	},
	{
		name: "Typescript",
		icon: typescipt,
		color: "bg-purple-500",
		percentage: "w-[60%]",
	},
];

export default function LanguagesSection() {
	const [selected, setSelected] = useState("Css");
	const getColorAndPercentage = (selected: string) => {
		let item =
			selected == "Css"
				? Languages[0]
				: selected == "Html"
				? Languages[1]
				: selected == "Javascript"
				? Languages[2]
				: selected == "Python"
				? Languages[3]
				: Languages[4];
		return item;
	};
	return (
		<>
			<div className="hidden md:flex flex-row justify-start flex-wrap gap-6 mt-4">
				{Languages.map((Language) => {
					return (
						<motion.div
							key={Language.name}
							className="group relative"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<Image
								src={Language.icon}
								width={50}
								height={50}
								alt={Language.name}
								loading="lazy"
							/>
							<div className="group-hover:block absolute hidden left-16 top-0 z-10">
								<div className="absolute w-5 h-5 bg-slate-700 rotate-45 top-[50%] -translate-y-1/2 -translate-x-1/3"></div>
								<div className="flex flex-col items-center text-slate-400 bg-slate-700  rounded-md  px-4 py-2 space-y-2">
									<div>{Language.name}</div>
									<div className="w-[200px] h-2 bg-gray-800 rounded-full">
										<div
											className={`${Language.color} h-full rounded-full ${Language.percentage}`}
										></div>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
			<div className="md:hidden block">
				<div className="flex flex-row justify-center flex-wrap gap-4 mt-4">
					{Languages.map((Language) => {
						return (
							<motion.div
								key={Language.name}
								className={`${
									selected == Language.name
										? "border-b-[1.5px] border-b-purple-500"
										: ""
								} p-2`}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<Image
									src={Language.icon}
									width={30}
									height={30}
									alt={Language.name}
									onClick={() => setSelected(Language.name)}
									loading="lazy"
								/>
							</motion.div>
						);
					})}
				</div>
				<motion.div
					className="flex flex-col items-center text-slate-400 bg-slate-700  rounded-md  p-4 space-y-2 mt-3"
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<div>{selected}</div>
					<div className="w-[60vw] h-2 bg-gray-800 rounded-full">
						<div
							className={`${
								getColorAndPercentage(selected).color
							} h-full rounded-full ${
								getColorAndPercentage(selected).percentage
							}`}
						></div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
