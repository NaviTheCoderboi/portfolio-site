"use client";
import React from "react";
import SectionTitle from "@component/SectionTitle";
import { motion } from "framer-motion";
import {
	LanguagesSection,
	TechnologiesSection,
	GithubStats,
} from "@/components/AboutComponents";

const About = ({ githubStats }: { githubStats: any }) => {
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
						viewport={{ once: true }}
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
						viewport={{ once: true }}
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
							viewport={{ once: true }}
						>
							Here are few languages I know:
						</motion.div>
						<LanguagesSection />
					</div>
				</div>
				<div className="w-full lg:w-1/2 text-lg text-slate-400 font-medium flex flex-col gap-10">
					Frameworks and Technologies I know:
					<TechnologiesSection />
					Github stats:
					<GithubStats githubStats={githubStats} />
				</div>
			</div>
		</section>
	);
};

export default About;
