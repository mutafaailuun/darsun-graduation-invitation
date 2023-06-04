// import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { qw } from "../fonts";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

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
				{/* <SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide> */}
			</Swiper>
			{/* <Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper">
				{images.map((image) => (
					<SwiperSlide key={image.id} className="divide-y-8 drop-shadow-lg">
						<Image
							src={`/static/img/${image.name}1.jpg`}
							width={400}
							height={400}
							alt=""
						/>
						<Image
							src={`/static/img/${image.name}2.jpg`}
							width={400}
							height={400}
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper> */}
		</div>
	);
};

export default Gallery;
