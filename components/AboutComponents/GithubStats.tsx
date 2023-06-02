import React, { Suspense } from "react";
import { motion } from "framer-motion";

const GithubStats = ({ githubStats }: { githubStats: any }) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="flex flex-col md:flex-row justify-center items-center p-4 gap-8">
				{/* eslint-disable-next-line @next/next/no-img-element*/}
				<motion.img
					src={githubStats.avatar_url}
					alt="avatar"
					className="rounded-full w-32 h-32"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				/>
				<div className="flex flex-col justify-center gap-2">
					<motion.div
						className="text-lg hover:text-purple-500 font-light text-slate-300 cursor-text duration-300"
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<span className="text-purple-500">Name.</span> {githubStats.name}
					</motion.div>
					<motion.div
						className="text-lg hover:text-purple-500 font-light text-slate-300 cursor-text duration-300"
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<span className="text-purple-500">Followers.</span>{" "}
						{githubStats.followers}
					</motion.div>
					<motion.div
						className="text-lg hover:text-purple-500 font-light text-slate-300 cursor-text duration-300"
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<span className="text-purple-500">Following.</span>{" "}
						{githubStats.following}
					</motion.div>
					<motion.div
						className="text-lg hover:text-purple-500 font-light text-slate-300 cursor-text duration-300"
						initial={{ y: 10, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<span className="text-purple-500">Location.</span>{" "}
						{githubStats.location}
					</motion.div>
				</div>
			</div>
		</Suspense>
	);
};

export default GithubStats;
