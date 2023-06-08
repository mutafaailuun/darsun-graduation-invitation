"use client";

import CountDown from "./CountDown";
import { messiri } from "../fonts";
import Calendar from "/public/svgs/calendar-seventeen.svg";
import Map from "/public/svgs/map-svgrepo-com.svg";
import { motion } from "framer-motion";

export default function DateAndTime() {
	return (
		<div className="flex flex-col justify-center h-screen -mt-[60px]">
			<motion.div
				initial={{ opacity: 0, scale: 1, y: "-50%" }}
				animate={{ opacity: 1, scale: 1, y: "0%" }}
				transition={{
					duration: 0.8,
					delay: 0,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				<p
					className={`${
						messiri.className
					} ${`text-[#373F10] px-10 text-center text-sm`}`}>
					Dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Wisuda{" "}
					<br className="s:hidden xs:block" />
					Pesantren Darus-Sunnah
				</p>
				<h1
					className={`${messiri.className} text-[#AA3609] text-md text-center py-4 font-messiri`}>
					Yang Diselenggarakan Pada
				</h1>
			</motion.div>
			<div className="flex items-center flex-col justify-center mx-10">
				<motion.div
					initial={{ opacity: 0, scale: 1, x: "50%" }}
					animate={{ opacity: 1, scale: 1, x: "0%" }}
					transition={{
						duration: 0.8,
						delay: 0,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="flex items-center flex-col mx-10 ">
					<Calendar className="md:w-20 s:w-10 top-0 fill-none" />
					<h2
						className={`${
							messiri.className
						} ${`pt-2 text-center text-2xl font-extrabold text-red-main`}`}>
						Sabtu, 17 Juni 2023
					</h2>

					<p
						className={`${
							messiri.className
						} ${`text-base text-center font-bold text-red-main pb-4`} `}>
						Pukul 09.00 s/d Selesai
					</p>
				</motion.div>

				{/* Location */}
				<motion.div
					initial={{ opacity: 0, scale: 1, x: "-50%" }}
					animate={{ opacity: 1, scale: 1, x: "0%" }}
					transition={{
						duration: 1.25,
						delay: 0,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="flex items-center flex-col mx-2 ">
					<Map className="md:w-24 s:w-10 fill-none stroke-[1px]" />
					<h2
						className={`${
							messiri.className
						} ${`text-center text-xl font-black text-green-main`}`}>
						Gedung Wisma Syahida Inn, <br /> UIN Syarif Hidayatullah Jakarta
					</h2>

					<p
						className={`${
							messiri.className
						} ${`text-base text-center text-green-main font-semibold`} `}>
						Jl. Kertamukti, Pisangan, <br /> Kec. Ciputat Timur., Kota Tangerang
						Selatan,
						<br /> Banten 15419
					</p>
				</motion.div>
			</div>
			<CountDown />
		</div>
	);
}
