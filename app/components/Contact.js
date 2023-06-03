import { qw, messiri, jkt } from "../fonts";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	function handleContactBanin() {
		window.open(
			`https://wa.me/6285656212872?text=Assalamualaikum..%20Saya%20mohon%20izin%20bertanya.`
		);
	}
	function handleContactBanat() {
		window.open(
			`https://wa.me/62881025760674?text=Assalamualaikum..%20Saya%20mohon%20izin%20bertanya.`
		);
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen -mt-14">
			<h1
				className={`${
					qw.className
				} ${`text-center text-5xl border-collapse text-red-main`}`}>
				Contact Person
			</h1>
			<p
				className={`${
					messiri.className
				} ${`text-[#373F10] px-10 text-center text-md`}`}>
				Hubungi Contact Person kami jika ada hal yang ingin ditanyakan
			</p>
			<div className="my-2">
				<p className={`${messiri.className} text-green-main mb-2 font-bold`}>
					Panitia Wisuda Putra:
				</p>
				<button
					onClick={handleContactBanin}
					type="text"
					className="btn w-fit border-none bg-[#41644A] hover:bg-gradient-to-r from-[#957314] to-[#C09F3D] text-[#eeead6]">
					<BsWhatsapp className="w-fit mr-2" />
					<p className={jkt.className}>M. Zuhri Tamam</p>
				</button>
			</div>
			<div className="my-2">
				<p className={`${messiri.className} text-green-main mb-2 font-bold`}>
					Panitia Wisuda Putri:
				</p>
				<button
					id="putri"
					onClick={handleContactBanat}
					type="text"
					className="btn w-fit border-none bg-[#41644A] hover:bg-gradient-to-r from-[#957314] to-[#C09F3D] text-[#eeead6]">
					<BsWhatsapp className="w-fit mr-2" />
					<p className={jkt.className}>Wafa Sa&apos;iedah</p>
				</button>
			</div>
		</div>
	);
};

export default Contact;
