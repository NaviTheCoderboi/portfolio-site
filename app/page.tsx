import React from "react";
import Navbar from "@component/Navbar";

const page = () => {
	return (
		<div className="w-full h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll">
			<Navbar />
		</div>
	);
};

export default page;
