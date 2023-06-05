// import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { qw } from "../fonts";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { BsInstagram } from "react-icons/bs";

const Gallery = () => {
	const images = [
		{
			id: 1,
			name: "campur-01",
		},

		{
			id: 2,
			name: "campur-02",
		},
		{
			id: 3,
			name: "campur-1",
		},

		{
			id: 4,
			name: "campur-2",
		},
		{
			id: 5,
			name: "banin-1",
		},
		{
			id: 6,
			name: "banin-2",
		},
		{
			id: 7,
			name: "banat-1",
		},
		{
			id: 8,
			name: "banat-2",
		},
		{
			id: 9,
			name: "mdsbareng-1",
		},
		{
			id: 10,
			name: "mdsbareng-2",
		},
		{
			id: 11,
			name: "mds-batik-1",
		},
		{
			id: 12,
			name: "mds-batik-2",
		},
	];
	const handleButton = (id) => {
		if (id === "owl") {
			window.open(`https://instagram.com/auliyadarsun21?igshid=MzRlODBiNWFlZA==`);
		} else if (id === "inf") {
			window.open(`https://instagram.com/mds_darsun?igshid=MzRlODBiNWFlZA==`);
		}
	};
	return (
		<div className="relative z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<h1
				className={`${qw.className} z-10 text-center text-5xl border-collapse text-green-main`}>
				Galeri Foto Wisudawan
			</h1>

			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper">
				{images.map((image) => (
					<SwiperSlide key={image.id} className="object-cover px-10">
						<Image
							className="rounded-xl "
							src={`/static/img/${image.name}.jpg`}
							height={400}
							width={400}
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="btn-group xs:btn-group-vertical s:btn-group-horizontal mt-4 font-jkt">
				<button
					onClick={() => handleButton("owl")}
					className="btn bg-red-main text-vanilla">
					<BsInstagram className="mr-2" /> Auliya XXI
				</button>
				<button
					onClick={() => handleButton("inf")}
					className="btn bg-green-main text-vanilla">
					Infinity IV <BsInstagram className="ml-2" />
				</button>
			</div>
		</div>
	);
};

export default Gallery;
