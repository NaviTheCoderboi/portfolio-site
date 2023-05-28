import React from "react";
import Navbar from "@component/Navbar";
import Introduction from "@component/Intro";
import About from "@component/About";

const page = () => {
	return (
		<div className="w-screen h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll bg-[#0A1B2F]">
			<Navbar />
			<div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
				<div className="h-[88vh] mx-auto p-8 flex flex-col gap-20">
					<Introduction />
					<About />
				</div>
			</div>
		</div>
	);
};

export default page;
