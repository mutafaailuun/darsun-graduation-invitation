"use client";

import CountDown from "./CountDown";
import { messiri, gv } from "../fonts";
import Calendar from "/public/svgs/calendar-seventeen.svg";
import Map from "/public/svgs/map-svgrepo-com.svg";

export default function DateAndTime() {
	return (
		<div>
			<div className="flex flex-col justify-center h-screen -mt-14">
				<p
					className={`${
						messiri.className
					} ${`text-[#FEFFDB] px-20 text-center text-sm`}`}>
					Dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Wisuda
					Pesantren Darus-Sunnah
				</p>
				<h1
					className={`${
						gv.className
					} ${`text-[#FEFFDB] text-3xl text-center py-4`}`}>
					Yang Diselenggarakan Pada
				</h1>
				<div className="flex items-center flex-col justify-center mx-10">
					<div className="flex items-center flex-col mx-10 ">
						<Calendar className="md:w-20 s:w-10 top-0 " />
						<h2
							className={`${
								messiri.className
							} ${`pt-2 text-center text-2xl text-[#FEFFDB]`}`}>
							Sabtu, 17 Juni 2023
						</h2>

						<p className={`${messiri.className} ${`text-base text-[#FEFFDB] pb-4`} `}>
							Pukul 07.00 s/d Selesai
						</p>
					</div>

					{/* Location */}
					<div className="flex items-center flex-col mx-10 ">
						<Map className="md:w-24 s:w-10 fill-none stroke-[1px]" />
						<h2
							className={`${
								messiri.className
							} ${`text-center text-2xl text-[#FEFFDB]`}`}>
							Gedung Syahida Inn
						</h2>

						<p
							className={`${
								messiri.className
							} ${`text-base text-center text-[#FEFFDB]`} `}>
							Jl. Kertamukti, Pisangan, Kec. Ciputat Timur., Kota Tangerang Selatan,
							Banten 15419
						</p>
					</div>
				</div>
				<CountDown />
			</div>
		</div>
	);
}
