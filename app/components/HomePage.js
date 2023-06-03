import { ari, messiri, qw } from "../fonts";
import Darsun from "/public/svgs/Darsun.svg";
import Ornament4 from "/public/svgs/ornament-4.svg";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
	const name = useSearchParams();
	return (
		<>
			<div className="z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
				<span className="p-2 bg-[#AA3609] rounded-full drop-shadow-md">
					<Darsun className="fill-[#FFFDEC] stroke-[#AA3609] w-14" />
				</span>

				<Ornament4 className="w-32 mb-3 mt-2 fill-[#FFFDEC]" />
				<h2
					className={`${
						qw.className
					} ${`z-10 text-7xl text-center text-[#AA3609] `}`}>
					Undangan
				</h2>
				<h1
					className={`${
						messiri.className
					} ${` text-5xl font-semibold text-[#AA3609] text-center z-50 pt-5`}`}>
					حفلة التخرج
				</h1>
				<h5
					className={`${messiri.className} ${`text-xl text-[#AA3609] text-center`}`}>
					معهد دار السنة الإسلامي
				</h5>

				<h2
					className={`${
						messiri.className
					} ${`z-10 text-lg font-extrabold text-center text-[#373F10] pt-4`}`}>
					Wisuda Santri & Mahasantri
				</h2>
				<h3
					className={`${
						messiri.className
					} ${`z-10 text-lg font-semibold text-center text-[#373F10] pb-4`}`}>
					Pesantren Darus-Sunnah
				</h3>
				<h4
					className={`${
						messiri.className
					} ${`z-10 text-m text-center text-[#373F10]`}`}>
					Kpd. Yth. <br /> Bapak/Ibu/Saudara/i
				</h4>
				<div className="p-3 mt-3 drop-shadow-lg rounded-3xl bg-[#373F10] text-xl text-[#FFFDEC]">
					<p className={messiri.className}>{name}</p>
				</div>
			</div>
		</>
	);
}
