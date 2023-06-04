"use client";
import { qw, messiri } from "./fonts";
import { Element } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import DateAndTime from "./components/DateAndTime";
import Jadwal from "./components/Rundown";
import Comments from "./components/Comments";
import Darsun from "/public/svgs/Darsun.svg";
import Ornament4 from "/public/svgs/ornament-4.svg";
import HomePage from "./components/HomePage";
import { useSearchParams } from "next/navigation";
import { scroller  } from "react-scroll";
import {
	BsCalendar3,
	BsFillHouseDoorFill,
	BsListCheck,
	BsFillChatSquareQuoteFill,
	BsFillPlayCircleFill,
	BsFillStopCircleFill,
	BsGeoFill,
	BsEmojiSmile,
	BsFilePersonFill,
	// BsPersonFill,
} from "react-icons/bs";
import useSound from "use-sound";
import Map from "./components/Map";
import Thanks from "./components/Thanks";
import Contact from "./components/Contact";

export default function Home() {
	const [currentPage, setCurrentPage] = useState("open");
	const soundUrl = "/audio/mahaguru.MP3";
	const [play, { stop }] = useSound(soundUrl);
	const [isPlaying, setIsPlaying] = useState(false);
	const fullscreenRef = useRef(null);
	const name = useSearchParams();
	const bottomBarRef = useRef(null);
	const icons = [
		{
			id: 1,
			name: "HomePage",
			icon: BsFillHouseDoorFill,
		},
		{
			id: 2,
			name: "datesAndTime",
			icon: BsCalendar3,
		},
		{ id: 3, name: "rundown", icon: BsListCheck },
		{ id: 4, name: "location", icon: BsGeoFill },
		{
			id: 5,
			name: "comments",
			icon: BsFillChatSquareQuoteFill,
		},
		{ id: 7, name: "contact", icon: BsFilePersonFill },
		{ id: 8, name: "thanks", icon: BsEmojiSmile },
		// Add more icons as needed
	];

	function handleClickBottomBar(iconId, iconName) {
		setCurrentPage(iconName);
	}

	function handleOpenButton() {
		play();
		setIsPlaying(true);
		setCurrentPage("HomePage");
		toggleFullscreen();
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

	useEffect(() => {
		const handleSwipeDown = (event) => {
			const deltaY = event.deltaY;
			if (deltaY > 0) {
				// Swipe down detected, change currentPage
				const nextIndex = icons.findIndex((icon) => icon.id === currentPage) + 1;
				if (nextIndex < icons.length) {
					const nextIcon = icons[nextIndex];
					handleClickBottomBar(nextIcon.id, nextIcon.name);
					scroller.scrollTo(nextIcon.id, {
						duration: 500,
						smooth: "easeInOutQuart",
						containerId: "scroll-container",
						offset: -50,
					});
				}
			}
		};

		bottomBarRef.current?.addEventListener("wheel", handleSwipeDown);

		return () => {
			bottomBarRef.current?.removeEventListener("wheel", handleSwipeDown);
		};
	}, [currentPage, handleClickBottomBar, icons]);

	return (
		<div className="relative flex flex-col items-center justify-center">
			<Element name="open">
				{currentPage === "open" && (
					<>
						<div className="z-20 -mt-[100px] flex items-center flex-col justify-center h-screen overflow-hidden">
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
								className={`${
									messiri.className
								} ${`text-xl text-[#AA3609] text-center`}`}>
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
							<button
								ref={fullscreenRef}
								onClick={handleOpenButton}
								className={`${
									messiri.className
								} ${`relative z-10 bg-gradient-to-r from-[#AA3609] to-[#ff6745] text-[#FFFDEC] rounded-xl font-bold my-2 py-2 px-2`}`}>
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
			<Element name="contact">{currentPage === "contact" && <Contact />}</Element>
			<Element name="thanks">{currentPage === "thanks" && <Thanks />}</Element>

			{/* Bottom Bar */}

			{currentPage !== "open" && (
				<div className="relative w-full">
					{isPlaying ? (
						<BsFillPlayCircleFill
							onClick={handleSound}
							className="absolute bottom-20 z-50 text-sm w-[70px] h-[70px] py-3 px-4 fill-[#373F10] "
						/>
					) : (
						<BsFillStopCircleFill
							onClick={handleSound}
							className="absolute bottom-20 z-50 text-sm w-[70px] h-[70px] py-3 px-4 fill-[#AA3609] "
						/>
					)}

					<div
						ref={bottomBarRef}
						className="bottom-bar bottom-0 bg-[#373F10] h-14 flex items-center justify-start w-full overflow-x-scroll">
						{icons.map((icon) => (
							<span
								key={icon.id}
								className={`hover:bg-gradient-to-b from-black to-[#272727] w-[90px] h-[90px] flex items-center snap snap-center`}
								onClick={() => handleClickBottomBar(icon.id, icon.name)}>
								<icon.icon className="w-[70px] h-[60px] py-3 px-4 my-2 text-[#EEEAD6]  hover:fill-[#E7C494]" />
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
