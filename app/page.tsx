import React from "react";
import Navbar from "@component/Navbar";
import Introduction from "@component/Intro";
import About from "@component/About";

const page = () => {
	return (
		<div className="w-screen h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll bg-[#0A1B2F]">
			<Navbar />
			<div className="w-full h-[88vh] xl:flex flex-col justify-center">
				<Introduction />
				<About />
			</div>
		</div>
	);
};

export default page;
