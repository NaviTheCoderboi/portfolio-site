"use client";
import React, { useState } from "react";
import SectionTitle from "@component/SectionTitle";
import {
	css3,
	html5,
	javascript,
	python,
	typescipt,
	docker,
	git,
	mongodb,
	nextjs,
	pg,
	reactjs,
	tailwindcss,
	ubuntu,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";

interface TechnologiesType {
	name: string;
	icon: any;
}

const Technologies: TechnologiesType[] = [
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "MongoDb",
		icon: mongodb,
	},
	{
		name: "NextJs",
		icon: nextjs,
	},
	{
		name: "Postgres",
		icon: pg,
	},
	{
		name: "ReactJs",
		icon: reactjs,
	},
	{
		name: "TailwindCss",
		icon: tailwindcss,
	},
	{
		name: "Ubuntu",
		icon: ubuntu,
	},
];

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

const About = () => {
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
		<section
			id="about"
			className="max-w-[1024px] mx-auto py-10 lg:py-12 flex flex-col gap-8"
		>
			<SectionTitle titleNo="01" title="About" />
			<div className="flex flex-col lg:flex-row gap-16">
				<div className="w-full lg:w-1/2 text-lg text-slate-400 font-medium flex flex-col gap-10">
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						Hello there! I&apos;m Navinder Singh, a 14-year-old grade 9 student
						from India. Coding is my passion and I love exploring the world of
						web development. Alongside my fascination with technology, I also
						aspire to become a doctor in the future. The combination of medicine
						and technology excites me, as it allows me to contribute to
						healthcare and make a positive impact on people&apos;s lives.
					</motion.div>
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						Being from India, I am fortunate to be exposed to diverse cultures
						and experiences, which helps broaden my perspective. Through my
						portfolio site, I hope to share my journey, showcase my coding
						projects, and inspire others to pursue their passions. Join me as I
						embark on this exciting adventure of merging my interests and making
						a difference!
					</motion.div>
					<div>
						<motion.div
							initial={{ y: 10, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							Here are few languages I know:
						</motion.div>
						<div className="hidden md:flex flex-row justify-start flex-wrap gap-6 mt-4">
							{Languages.map((Language) => {
								return (
									<motion.div
										key={Language.name}
										className="group relative"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.6 }}
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
							>
								<div>{selected}</div>
								<div className="w-[200px] h-2 bg-gray-800 rounded-full">
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
					</div>
				</div>
				<div className="w-full lg:w-1/2 text-lg text-slate-400 font-medium flex flex-col gap-10">
					Frameworks and Technologies I know:
					<div className="flex flex-row justify-center md:justify-start flex-wrap gap-6">
						{Technologies.map((Technology) => {
							return (
								<motion.div
									key={Technology.name}
									className="group relative"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.6 }}
								>
									<div className="group relative hidden md:block">
										<Image
											src={Technology.icon}
											width={100}
											height={100}
											alt={Technology.name}
											loading="lazy"
										/>
										<div className="group-hover:block absolute hidden left-16 top-0 z-10">
											<div className="absolute w-5 h-5 bg-slate-700 rotate-45 top-[50%] -translate-y-1/2 -translate-x-1/3"></div>
											<div className="text-slate-400 bg-slate-700  rounded-md  px-4 py-2">
												<div>{Technology.name}</div>
											</div>
										</div>
									</div>
									<div className="group relative block md:hidden">
										<Image
											src={Technology.icon}
											width={50}
											height={50}
											alt={Technology.name}
											loading="lazy"
										/>
										<div className="group-hover:block absolute hidden left-16 top-0 z-10">
											<div className="absolute w-5 h-5 bg-slate-700 rotate-45 top-[50%] -translate-y-1/2 -translate-x-1/3"></div>
											<div className="text-slate-400 bg-slate-700  rounded-md  px-4 py-2">
												<div>{Technology.name}</div>
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
					Github stats:
					<Image
						src="https://github-readme-stats.vercel.app/api?username=NaviTheCoderboi&show_icons=true&theme=synthwave&border_color=0A1B2F&bg_color=0A1B2F"
						alt="Loading..."
						width={500}
						height={250}
						className="hidden md:block"
					/>
					<Image
						src="https://github-readme-stats.vercel.app/api?username=NaviTheCoderboi&show_icons=true&theme=synthwave&border_color=0A1B2F&bg_color=0A1B2F"
						alt="Loading..."
						className="block md:hidden"
						height={200}
						width={400}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
