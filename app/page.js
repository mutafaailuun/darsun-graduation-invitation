"use client";
import { ari, qw, messiri } from "./fonts";
import { Element } from "react-scroll";
import { useState, useRef } from "react";
import DateAndTime from "./components/DateAndTime";
import Jadwal from "./components/Rundown";
import Comments from "./components/Comments";
import Darsun from "/public/svgs/Darsun.svg";
import Ornament4 from "/public/svgs/ornament-4.svg";
import HomePage from "./components/HomePage";
import { useSearchParams } from "next/navigation";
import {
	BsFillHouseDoorFill,
	BsCalendarDateFill,
	BsListCheck,
	BsFillChatSquareQuoteFill,
	BsFillPlayCircleFill,
	BsFillStopCircleFill,
	BsGeoFill,
	BsEmojiSmile
} from "react-icons/bs";
import useSound from "use-sound";
import Map from "./components/Map";
import Thanks from "./components/Thanks";

export default function Home() {
	const [currentPage, setCurrentPage] = useState("open");
	const soundUrl = "/audio/mahaguru.MP3";
	const [play, { stop }] = useSound(soundUrl);
	const [isPlaying, setIsPlaying] = useState(false);
	const fullscreenRef = useRef(null);
	const name = useSearchParams();

	function handleDates() {
		setCurrentPage("datesAndTime");
	}

	function handleFront() {
		setCurrentPage("HomePage");
	}
	function handleRundown() {
		setCurrentPage("rundown");
	}
	function handleComments() {
		setCurrentPage("comments");
	}
	function handleThanks() {
		setCurrentPage("thanks");
	}
	function handleOpenButton() {
		play();
		setIsPlaying(true);
		setCurrentPage("HomePage");
		toggleFullscreen();
	}
	function handleLocation() {
		setCurrentPage("location");
	}

	function handleSound() {
		if (!isPlaying) {
			play();
			setIsPlaying(true);
		} else {
			stop();
			setIsPlaying(false);
		}
	}

	const toggleFullscreen = () => {
		const element = fullscreenRef.current;

		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			element.requestFullscreen().catch((err) => {
				console.error("Failed to enter fullscreen:", err);
			});
		}
	};

	return (
		<div className="relative flex flex-col items-center justify-center">
			<Element name="open">
				{currentPage === "open" && (
					<>
						<div className="z-20 flex items-center flex-col justify-center h-screen overflow-hidden">
							<Darsun className="fill-[#E7C494] w-14" />
							<Ornament4 className="w-32 mb-3 mt-2" />
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
									qw.className
								} ${`z-10 text-[5rem] text-center text-amber-200 `}`}>
								Undangan
							</h2>

							<h2
								className={`${
									messiri.className
								} ${`z-10 text-xl text-center text-amber-200`}`}>
								Wisuda Santri & Mahasantri
							</h2>
							<h3
								className={`${
									messiri.className
								} ${`z-10 text-xl text-center text-amber-200 pb-4`}`}>
								Pesantren Darus-Sunnah
							</h3>
							<h4
								className={`${
									messiri.className
								} ${`z-10 text-m text-center text-amber-200 py-0`}`}>
								Kpd. Yth. <br /> Bapak/Ibu/Saudara/i
							</h4>
							<div className="p-3 my-3 border-2 border-amber-200 rounded-3xl bg-black text-xl text-amber-200">
								<p className={messiri.className}>{name}</p>
							</div>

							<button
								ref={fullscreenRef}
								onClick={handleOpenButton}
								className={`${
									messiri.className
								} ${`relative z-10 bg-gradient-to-r from-amber-200 to-amber-300 text-zinc-800 rounded-xl font-bold py-2 px-2`}`}>
								Buka Undangan
							</button>
						</div>
					</>
				)}
			</Element>

			{/* Navigation Link */}
			<Element name="HomePage">
				{currentPage === "HomePage" && <HomePage />}
			</Element>

			<Element name="datesAndTime">
				{currentPage === "datesAndTime" && <DateAndTime />}
			</Element>
			<Element name="rundown">{currentPage === "rundown" && <Jadwal />}</Element>
			<Element name="comments">
				{currentPage === "comments" && <Comments />}
			</Element>
			<Element name="location">{currentPage === "location" && <Map />}</Element>
			<Element name="thanks">{currentPage === "thanks" && <Thanks />}</Element>

			{/* Bottom Bar */}

			{currentPage !== "open" && (
				<div className="relative w-full">
					{isPlaying ? (
						<BsFillPlayCircleFill
							onClick={handleSound}
							className="absolute bottom-20 text-sm w-[70px] h-[70px] py-3 px-4 fill-[#E7C494] "
						/>
					) : (
						<BsFillStopCircleFill
							onClick={handleSound}
							className="absolute bottom-20 text-sm w-[70px] h-[70px] py-3 px-4 fill-[#E7C494] "
						/>
					)}

					<div className="bottom-0 bg-gradient-to-br from-[#E7C494] to-[#FFEDD4] h-14 flex items-center justify-center w-full">
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleFront}>
							<BsFillHouseDoorFill className="w-full h-full py-3 px-4 text-[#1A1A1A]  hover:fill-[#E7C494]" />
						</span>
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleDates}>
							<BsCalendarDateFill className="w-full h-full py-3 px-4 text-[#1A1A1A]  hover:fill-[#E7C494]" />
						</span>
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleRundown}>
							<BsListCheck className="w-full h-full py-3 px-4 text-[#1A1A1A]  hover:fill-[#E7C494]" />
						</span>
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleComments}>
							<BsFillChatSquareQuoteFill className="text-sm w-full h-full py-3 px-4 hover:fill-[#E7C494] text-[#1A1A1A] " />
						</span>
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleLocation}>
							<BsGeoFill className="text-sm w-full h-full py-3 px-4 hover:fill-[#E7C494] text-[#1A1A1A] " />
						</span>
						<span
							className="hover:bg-gradient-to-b from-black to-[#272727] h-full flex items-center rounded-md"
							onClick={handleThanks}>
							<BsEmojiSmile className="text-sm w-full h-full py-3 px-4 hover:fill-[#E7C494] text-[#1A1A1A] " />
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
