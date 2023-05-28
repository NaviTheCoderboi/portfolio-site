import React from "react";
import SectionTitle from "@component/SectionTitle";

const About = () => {
	return (
		<section
			id="about"
			className="max-w-[1024px] mx-auto py-10 lg:py-12 flex flex-col gap-8"
		>
			<SectionTitle titleNo="01" title="About" />
			<div className="flex flex-col lg:flex-col gap-16">
				<div className="w-full lg:w-1/2 text-lg text-slate-400 font-medium">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
					dolore commodi nemo assumenda tempora error ullam corrupti quam iure
					possimus accusamus eveniet fugit eligendi quia esse, optio impedit
					architecto laudantium consectetur voluptate cupiditate non corporis
					sint! Pariatur repudiandae magni non facilis et distinctio laboriosam
					hic, consectetur magnam fugiat sunt exercitationem.
				</div>
				<div className="w-full lg:w-1/2 text-lg text-slate-400 font-medium">
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
