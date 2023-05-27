import React from "react";
import Navbar from "@component/Navbar";
import Center from "@component/Center";

const page = () => {
	return (
		<div className="w-screen h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll bg-[#0A1B2F]">
			<Navbar />
			<div className="w-full h-[88vh] xl:flex justify-center">
				<Center />
			</div>
		</div>
	);
};

export default page;
