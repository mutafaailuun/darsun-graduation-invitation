"use client";
import React from "react";
import CountDown from "../components/CountDown";
import { qw, messiri, jkt, gv } from "../fonts";
import Calendar from "/public/svgs/calendar.svg";
import Map from "/public/svgs/map-svgrepo-com.svg";
import Button from "../components/Button";

export default function Date() {
	return (
		<>
			<div className="my-10">
				<p
					className={`${
						messiri.className
					} ${`text-[#FEFFDB] px-20 text-center text-sm`}`}>
					Dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Wisuda
					Pesantren Luhur Ilmu Hadis Darus-Sunnah
				</p>
				<h1
					className={`${gv.variable} ${`text-[#FEFFDB] text-3xl text-center`}`}>
					Yang Diselenggarakan Pada
				</h1>
				<div className="flex mx-10 mt-5">
					<Calendar className="w-20 top-0" />
					<div>
						<h2 className={`${messiri.className} ${`text-2xl text-[#FEFFDB]`}`}>
							Sabtu
						</h2>
						<div className="flex flex-row">
							<h2
								className={`${messiri.className} ${`text-5xl text-[#FEFFDB]`}`}>
								{" "}
								31
							</h2>
							<p
								className={`${messiri.className} ${`text-sm text-[#FEFFDB]`} `}>
								Juni <br />
								2023
							</p>
						</div>
						<p className={`${messiri.className} ${`text-sm text-[#FEFFDB]`} `}>
							Pukul 07.00 s/d Selesai
						</p>
					</div>
				</div>
				<div className="flex mx-10 mt-5">
					<Map className="w-20 fill-none" />
					<div>
						<h2 className={`${messiri.className} ${`text-2xl text-[#FEFFDB]`}`}>
							Gedung Syahida Inn
						</h2>
						<div className="flex flex-row">
							<p
								className={`${messiri.className} ${`text-sm text-[#FEFFDB]`} `}>
								Jl. Kertamukti, Pisangan, <br /> Kec. Ciputat Timur.,
								<br /> Kota Tangerang Selatan, Banten 15419
							</p>
						</div>
						<p className={`${messiri.className} ${`text-sm text-[#FEFFDB]`} `}>
							Pukul 07.00 s/d Selesai
						</p>
					</div>
				</div>
				<CountDown />
			</div>
		</>
	);
}
