import Image from "next/image";
import { jkt, ar, messiri, qw } from "../fonts";

import React from "react";
import Button from "./Button";

export default function Front() {
	return (
		<>
			<div className="z-20 top-40 flex items-center flex-col overflow-hidden">
				<Image
					className="justify-center align-middle flex items-center py-5"
					src="/img/darsun-white.png"
					alt="darsun"
					width={60}
					height={60}
				/>
				<h1
					className={`${
						messiri.className
					} ${` text-5xl font-semibold text-amber-200 text-center z-50 pt-5`}`}>
					حفلة التخرج
				</h1>
				<h5
					className={`${
						messiri.className
					} ${`text-xl text-amber-200 text-center `}`}>
					معهد دار السنة الدولى لعلوم الحديث
				</h5>
				<h2
					className={`${
						qw.variable
					} ${`z-10 text-5xl text-center text-amber-200 py-5`}`}>
					Undangan
				</h2>
				<h2
					className={`${
						messiri.className
					} ${`z-10 text-xl text-center text-amber-200 py-5`}`}>
					Wisuda Mahasantri
				</h2>
				<h3
					className={`${
						messiri.className
					} ${`z-10 text-xl text-center text-amber-200 py-0`}`}>
					Pesantren Darus-Sunnah
				</h3>
				<h4
					className={`${
						messiri.className
					} ${`z-10 text-m text-center text-amber-200 py-0`}`}>
					Kpd. Yth. <br /> Bapak/Ibu/Saudara/i
				</h4>
				<button className="relative z-10 bg-gradient-to-r from-amber-200 to-amber-300 text-zinc-800 rounded-xl font-bold py-2 px-2">
					Buka Undangan
				</button>
			</div>
		</>
	);
}
