import Image from "next/image";
import { ari, messiri, qw } from "../fonts";
import Darsun from "/public/svgs/Darsun.svg";
import Ornament4 from "/public/svgs/ornament-4.svg";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
	const name = useSearchParams();
	return (
		<>
			<div className="z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
				<Darsun className="fill-[#E7C494] w-14" />
				<Ornament4 className="w-32 mb-3 mt-2" />
				<h2
					className={`${
						qw.className
					} ${`z-10 text-7xl text-center text-amber-200 `}`}>
					Undangan
				</h2>
				<h1
					className={`${
						ari.className
					} ${` text-5xl font-semibold text-amber-200 text-center z-50 pt-5`}`}>
					حفلة التخرج
				</h1>
				<h5
					className={`${
						ari.className
					} ${`text-xl text-amber-200 text-center pt-6`}`}>
					معهد دار السنة الدولى لعلوم الحديث
				</h5>
				<h5
					className={`${
						ari.className
					} ${`text-xl text-amber-200 text-center pt-0`}`}>
					ومدارس دار السنة الاسلامية
				</h5>

				<h2
					className={`${
						messiri.className
					} ${`z-10 text-lg text-center text-amber-200`}`}>
					Wisuda Santri & Mahasantri
				</h2>
				<h3
					className={`${
						messiri.className
					} ${`z-10 text-lg text-center text-amber-200 pb-4`}`}>
					Pesantren Darus-Sunnah
				</h3>
				<h4
					className={`${
						messiri.className
					} ${`z-10 text-m text-center text-amber-200`}`}>
					Kpd. Yth. <br /> Bapak/Ibu/Saudara/i
				</h4>
				<div className="p-3 mt-3 border-2 border-amber-200 rounded-3xl bg-black text-xl text-amber-200">
					<p className={messiri.className}>{name}</p>
				</div>
			</div>
		</>
	);
}
