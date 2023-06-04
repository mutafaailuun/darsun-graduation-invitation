import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";


const Gallery = () => {
	return (
		<div className="z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper">
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/img/08.jpg" width={400} height={400} alt="slide" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Gallery;
