import "./globals.css";
import Image from "next/image";

export const metadata = {
	title: "Undangan Wisuda Darus-Sunnah",
	description:
		"Undangan ini merupakan undangan untuk para wali santri dan mahasantri untuk menghadiri acara wisuda",
};

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<body>
				<main className="relative flex items-center justify-center h-screen bg-gradient-to-b from-[#1F1300] to-[#372200] overflow-hidden">
					<div className="relative w-[500px] flex items-center">
						<Image
							className="absolute right-[250px] animate-spin-slow z-0"
							src="/static/img/mandala-spin.png"
							alt="mandala"
							width={600}
							height={600}
						/>

						<div className="relative phone:w-[500px] w-screen bg-scroll bg-gradient-to-b from-[#fffdec] to-[#EEEAD6] shadow-2xl z-10 overflow-hidden border-x-2 border-[#373F10] justify-center h-screen">
							{/* <Image
								className="absolute z-20 pl-5"
								src="/img/rope.png"
								alt="garis"
								height={30}
								width={30}
							/> */}
							{children}
							<Image
								className="absolute -bottom-56 animate-reverse-spin -z-10"
								src="/static/img/mandala-spin.png"
								alt="mandala"
								width={600}
								height={600}
							/>
							{/* <Image
								className="absolute right-0 top-0 z-20 pr-5"
								src="/img/rope.png"
								alt="garis"
								height={30}
								width={30}
							/> */}
						</div>

						<Image
							className="absolute left-[250px] animate-reverse-spin z-0"
							src="/static/img/mandala-spin.png"
							alt="mandala"
							width={600}
							height={600}
						/>
					</div>
				</main>
			</body>
		</html>
	);
}
