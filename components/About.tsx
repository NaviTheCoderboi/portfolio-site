import React from "react";
import SectionTitle from "@component/SectionTitle";
import { css3, html5, javascript, python, typescipt } from "@/public";
import Image from "next/image";

const Languages = [
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
	return (
		<section
			id="about"
			className="max-w-[1024px] mx-auto py-10 lg:py-12 flex flex-col gap-8"
		>
			<SectionTitle titleNo="01" title="About" />
			<div className="flex flex-col lg:flex-row gap-16">
				<div className="w-full lg:w-2/3 text-lg text-slate-400 font-medium flex flex-col gap-10">
					<div>
						Hello there! I&apos;m Navinder Singh, a 14-year-old grade 9 student
						from India. Coding is my passion and I love exploring the world of
						web development. Alongside my fascination with technology, I also
						aspire to become a doctor in the future. The combination of medicine
						and technology excites me, as it allows me to contribute to
						healthcare and make a positive impact on people&apos;s lives.
					</div>
					<div>
						Being from India, I am fortunate to be exposed to diverse cultures
						and experiences, which helps broaden my perspective. Through my
						portfolio site, I hope to share my journey, showcase my coding
						projects, and inspire others to pursue their passions. Join me as I
						embark on this exciting adventure of merging my interests and making
						a difference!
					</div>
					<div>
						Here are few languages I know:
						<div className="flex flex-row justify-start flex-wrap space-x-6 space-y-1 mt-4">
							{Languages.map((Language) => {
								return (
									<div key={Language.name} className="group relative">
										<Image
											src={Language.icon}
											width={50}
											height={50}
											alt={Language.name}
										/>
										<div className="group-hover:block absolute hidden left-16 top-[0.1rem] z-10">
											<div className="absolute w-5 h-5 bg-slate-700 rotate-45 top-[50%] -translate-y-1/2 -translate-x-1/3"></div>
											<div className="flex flex-col items-center text-slate-400 bg-slate-700  rounded-md  px-4 py-2">
												<div>{Language.name}</div>
												<div className="w-[200px] h-2 bg-gray-800 rounded-full">
													<div
														className={`${Language.color} h-full rounded-full ${Language.percentage}`}
													></div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="w-full lg:w-1/3 text-lg text-slate-400 font-medium">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
					dolore commodi nemo assumenda tempora error ullam corrupti quam iure
					possimus accusamus eveniet fugit eligendi quia esse, optio impedit
					architecto laudantium consectetur voluptate cupiditate non corporis
					sint! Pariatur repudiandae magni non facilis et distinctio laboriosam
					hic, consectetur magnam fugiat sunt exercitationem.
				</div>
			</div>
		</section>
	);
};

export default About;
