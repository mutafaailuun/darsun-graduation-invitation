import React from "react";
import { BsFillHouseDoorFill, BsCalendarDateFill } from "react-icons/bs";

export default function Button() {
	return (
		<div className="absolute phone:bottom-0 bg-gradient-to-br from-[#E7C494] to-[#FFEDD4] w-screen h-14 flex items-center mt-0">
			<div>
				<BsFillHouseDoorFill className="text-2xl text-[#1A1A1A] mx-10" />
			</div>
			<div>
				<BsCalendarDateFill className="text-2xl text-[#1A1A1A] mx-10" />
			</div>
		</div>
	);
}
