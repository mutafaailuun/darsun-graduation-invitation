"use client";
import { qw, messiri } from "./fonts";
import { Element } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import DateAndTime from "./components/DateAndTime";
import Rundown from "./components/Rundown";
import Darsun from "/public/svgs/Darsun.svg";
import Ornament4 from "/public/svgs/ornament-4.svg";
import HomePage from "./components/HomePage";
import { useSearchParams } from "next/navigation";
import {
	BsCalendar3,
	BsFillHouseDoorFill,
	BsListCheck,
	BsFillPlayCircleFill,
	BsFillStopCircleFill,
	BsGeoFill,
	BsImages,
	BsEmojiSmile,
	BsFilePersonFill,
	BsGiftFill,
} from "react-icons/bs";
import useSound from "use-sound";
import Map from "./components/Map";
import Thanks from "./components/Thanks";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Wakaf from "./components/Wakaf";

export default function Home() {
	const [currentPage, setCurrentPage] = useState("open");
	const soundUrl = "/audio/maher-zein.mp3";
	const [play, { stop }] = useSound(soundUrl);
	const [isPlaying, setIsPlaying] = useState(false);
	const [showText, setShowText] = useState(false);
	const fullscreenRef = useRef(null);
	const name = useSearchParams();
	const bottomBarRef = useRef(null);
	const elements = [
		{
			id: 1,
			name: "HomePage",
			icon: BsFillHouseDoorFill,
			component: <HomePage />,
			label: "Beranda",
		},
		{
			id: 2,
			name: "DateAndTime",
			icon: BsCalendar3,
			component: <DateAndTime />,
			label: "Waktu/Tempat",
		},
		{
			id: 3,
			name: "Rundown",
			icon: BsListCheck,
			component: <Rundown />,
			label: "Acara",
		},
		{
			id: 4,
			name: "Map",
			icon: BsGeoFill,
			component: <Map />,
			label: "G-Maps",
		},

		{
			id: 5,
			name: "Gallery",
			icon: BsImages,
			component: <Gallery />,
			label: "Galeri",
		},
		{
			id: 6,
			name: "Contact",
			icon: BsFilePersonFill,
			component: <Contact />,
			label: "Bantuan",
		},
		{
			id: 7,
			name: "Wakaf",
			icon: BsGiftFill,
			component: <Wakaf />,
			label: "Wakaf",
		},
		{
			id: 8,
			name: "Thanks",
			icon: BsEmojiSmile,
			component: <Thanks />,
			label: "Thanks",
		},
		// Add more icons as needed
	];

	function handleClickBottomBar(iconName) {
		setCurrentPage(iconName);
		setShowText(!showText);
	}

	function handleOpenButton() {
		setIsPlaying(true);
		setCurrentPage("HomePage");
		toggleFullscreen();
		play();
	}

	function handleSound() {
		if (!isPlaying) {
			setIsPlaying(true);
			play();
		} else {
			setIsPlaying(false);
			stop();
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
			<Element name="DateAndTime">
				{currentPage === "DateAndTime" && <DateAndTime />}
			</Element>
			<Element name="rundown">{currentPage === "Rundown" && <Rundown />}</Element>
			<Element name="Location">{currentPage === "Map" && <Map />}</Element>
			<Element name="Contact">{currentPage === "Contact" && <Contact />}</Element>
			<Element name="Gallery">{currentPage === "Gallery" && <Gallery />}</Element>
			<Element name="Wakaf">{currentPage === "Wakaf" && <Wakaf />}</Element>
			<Element name="Thanks">{currentPage === "Thanks" && <Thanks />}</Element>

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
						className="carousel bottom-bar bottom-0 bg-[#373F10] flex items-center justify-start overflow-x-scroll">
						{elements.map((element) => (
							<div
								key={element.id}
								className={`carousel-item hover:bg-gradient-to-b from-black to-[#272727] w-[60px] h-[60px] flex flex-col items-center justify-center px-2`}
								onClick={() => handleClickBottomBar(element.name)}>
								<element.icon className="w-[60px] h-[60px] px-2 pt-2 pb-1 text-[#EEEAD6]  hover:fill-[#E7C494]" />
								{/* {showText && <p className="text-xs font-jkt mb-1"> {element.label}</p>} */}
								<span
									className={`text ${
										showText ? "visible" : ""
									} text-xs text-vanilla font-jkt mb-1`}>
									{element.label}
								</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
