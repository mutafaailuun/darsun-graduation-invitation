import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { qw } from "../fonts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";

const Gallery = () => {
	const images = [
		{
			id: 1,
			name: "campur-0",
		},

		{
			id: 2,
			name: "campur-",
		},
		{
			id: 3,
			name: "banin-",
		},
		{
			id: 4,
			name: "banat-",
		},
		{
			id: 5,
			name: "mdsbareng-",
		},
		{
			id: 6,
			name: "mds-batik-",
		},
	];
	return (
		<div className="relative z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<h1
				className={`${qw.className} z-10 text-center text-5xl border-collapse text-green-main`}>
				Galeri Foto Wisudawan
			</h1>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper">
				{images.map((image) => (
					<SwiperSlide key={image.id} className="divide-y-8 drop-shadow-lg">
						<Image src={`/img/${image.name}1.jpg`} width={400} height={400} alt="" />
						<Image
							src={`/static/img/${image.name}2.jpg`}
							width={400}
							height={400}
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Gallery;
