import { qw, jkt } from "../fonts";
import { relative } from "path";

const MapGoogle = () => {
	const containerStyle = {
		position: relative,
		width: "100%",
		height: "60%",
	};

	const handleMarker = () => {
		window.open(`https://goo.gl/maps/CZF8f5daqPZdjZsf8`);
	};
	return (
		<div className="relative z-20 -mt-[60px] flex items-center flex-col justify-center w-[100%] h-screen overflow-hidden">
			<div className="relative w-[80%] h-screen flex flex-col items-center justify-center mx-20">
				<h1
					className={`${
						qw.className
					} ${`z-10 text-center text-5xl border-collapse text-green-main`}`}>
					Peta Lokasi
				</h1>
				<iframe
					className="relative rounded-lg border-green-main drop-shadow-md border-2 w-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.646748979164!2d106.76009019999996!3d-6.310053099999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efd00e403c67%3A0x698873dc2600442d!2sGd.%20SYAHIDA%20INN%20UIN%20II!5e0!3m2!1sid!2sid!4v1685577988308!5m2!1sid!2sid"
					style={containerStyle}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
				<p className={`${jkt.className} ${'text-green-main text-center'}`}>
					Jl. Kertamukti, Pisangan, Kec. Ciputat Timur., Kota Tangerang Selatan,
					Banten 15419
				</p>
				<button
					onClick={handleMarker}
					className="btn mt-5 bg-green-main text-[#EEEAD6] border-none hover:bg-gradient-to-r from-[#957314] to-[#C09F3D]">
					<p className={jkt.className}>Buka Map</p>
				</button>
			</div>
		</div>
	);
};

export default MapGoogle;
