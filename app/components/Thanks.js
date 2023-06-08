import { jkt, qw } from "../fonts";
import Darsun from "/public/svgs/Darsun.svg";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";

const Thanks = () => {
	function handleIg() {
		window.open(
			window.open(`https://instagram.com/mutafaailuun?igshid=MzRlODBiNWFlZA==`)
		);
	}
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className="z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<span className="p-2 bg-green-main rounded-full drop-shadow-md">
				<Darsun className="fill-[#FFFDEC] stroke-[#AA3609] w-14" />
			</span>
			<p className={`${jkt.className} ${"text-green-main my-2"}`}>
				Demikian Undangan ini kami sampaikan.
			</p>
			<h1 className={`${qw.className} ${"text-green-main text-7xl"}`}>
				Terima Kasih
			</h1>
			<motion.button
				initial={{ opacity: 0, scale: 1 }}
				animate={{ opacity: 1, scale: 1, rotate: [0, 0, 8, 0] }}
				transition={{
					duration: 2,
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				onClick={handleIg}
				className="flex items-center justify-center bg-green-main p-2 rounded-lg font-jkt text-vanilla">
				created by:
				<BsInstagram className="ml-2 mr-1" />
				mutafaailuun
			</motion.button>
		</motion.div>
	);
};

export default Thanks;
