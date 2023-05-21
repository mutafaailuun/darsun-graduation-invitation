"use client";

import React, { useEffect } from "react";
import { messiri } from "../fonts";
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
			<span className="mx-2 bg-gradient-to-b from-[#E7C494] to-[#8C6E4A] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						messiri.className
					} ${`text-center text-4xl text-[#1A1A1A]`}`}>
					{days}
				</p>
				<p
					className={`${
						messiri.className
					} ${`text-center text-l text-[#1A1A1A] -mt-2 font-bold`}`}>
					Hari
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#E7C494] to-[#8C6E4A] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						messiri.className
					} ${`text-center text-4xl text-[#1A1A1A]`}`}>
					{hours}
				</p>
				<p
					className={`${
						messiri.className
					} ${`text-center text-l text-[#1A1A1A] -mt-2 font-bold`}`}>
					Jam
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#E7C494] to-[#8C6E4A] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						messiri.className
					} ${`text-center text-4xl text-[#1A1A1A]`}`}>
					{minutes}
				</p>
				<p
					className={`${
						messiri.className
					} ${`text-center text-l text-[#1A1A1A] -mt-2 font-bold`}`}>
					Menit
				</p>
			</span>
			<span className="mx-2 bg-gradient-to-b from-[#E7C494] to-[#8C6E4A] w-14 h-20 rounded-lg flex flex-col justify-center">
				<p
					className={`${
						messiri.className
					} ${`text-center text-4xl text-[#1A1A1A]`}`}>
					{seconds}
				</p>
				<p
					className={`${
						messiri.className
					} ${`text-center text-l text-[#1A1A1A] -mt-2 font-bold`}`}>
					Detik
				</p>
			</span>
		</div>
	);
}
