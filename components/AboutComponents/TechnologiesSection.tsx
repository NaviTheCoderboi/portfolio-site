import Image from "next/image";
import { motion } from "framer-motion";
import {
	docker,
	git,
	mongodb,
	nextjs,
	pg,
	reactjs,
	tailwindcss,
	ubuntu,
} from "@/public";

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

export default function TechnologiesSection() {
	return (
		<div className="flex flex-row justify-center md:justify-start flex-wrap gap-6">
			{Technologies.map((Technology) => {
				return (
					<motion.div
						key={Technology.name}
						className="group relative"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
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
	);
}
