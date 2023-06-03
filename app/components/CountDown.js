"use client";

import { useEffect } from "react";
import { jkt } from "../fonts";
import { useState } from "react";
export default function CountDown() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const deadline = "2023-06-17T08:00:00.000+07:00";
	function getTime() {
		const time = Date.parse(deadline) - Date.now();
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / (1000 * 60)) % 60));
		setSeconds(Math.floor(time / 1000) % 60);
	}

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex justify-center mt-5">
			<span className="mx-2 bg-gradient-to-b from-[#957314] to-[#C09F3D] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						jkt.className
					} ${`text-center font-black text-4xl text-white mb-2`}`}>
					{days}
				</p>
				<p
					className={`${
						jkt.className
					} ${`text-center text-sm text-white -mt-2 font-bold`}`}>
					Hari
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#957314] to-[#C09F3D] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						jkt.className
					} ${`text-center text-4xl transition-all text-white font-bold mb-2`}`}>
					{hours}
				</p>
				<p
					className={`${
						jkt.className
					} ${`text-center text-sm text-white font-bold -mt-2`}`}>
					Jam
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#957314] to-[#C09F3D] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						jkt.className
					} ${`text-center text-4xl text-white font-bold mb-2`}`}>
					{minutes}
				</p>
				<p
					className={`${
						jkt.className
					} ${`text-center text-sm text-white -mt-2 font-bold`}`}>
					Menit
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#957314] to-[#C09F3D] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						jkt.className
					} ${`text-center transition-all text-4xl text-white font-bold mb-2`}`}>
					{seconds}
				</p>
				<p
					className={`${
						jkt.className
					} ${`text-center text-sm text-white -mt-2 font-bold`}`}>
					Detik
				</p>
			</span>
		</div>
	);
}
