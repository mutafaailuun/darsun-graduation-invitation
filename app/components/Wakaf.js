import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const Wakaf = () => {
	const handleTransfer = () => {
		window.open("https://wa.me/6281319645690?");
	};
	return (
		<div className="relative z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<div className="px-8">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<Image
						src="/static/img/wakaf-new.jpg"
						width={400}
						height={400}
						alt=""
						className="rounded-lg drop-shadow-md"
					/>
				</motion.div>
				<motion.p
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="text-center font-jkt text-green-main mt-2">
					Salurkan donasi terbaik Anda melalui:
				</motion.p>
				<div className="flex flex-col items-center justify-center">
					<motion.div
						initial={{ opacity: 0, x: "-20%" }}
						animate={{ opacity: 1, x: "0%" }}
						transition={{
							duration: 0.8,
							delay: 0.25,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="my-1 flex items-center justify-center rounded-lg w-fit bg-white">
						<div className="px-2 bg-[#17908d] rounded-md">
							<Image src="/static/img/bsi-logo.png" width={100} height={100} />
						</div>
						<CopyToClipboard
							text="7311388888"
							onCopy={() => alert("Berhasil disalin!")}>
							<div className="px-2 rounded-md mx-4">
								<p className="font-jkt font-semibold text-[#17908d]">73113-88888</p>
							</div>
						</CopyToClipboard>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "-20%" }}
						animate={{ opacity: 1, x: "0%" }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="my-1 flex items-center justify-center rounded-lg w-fit bg-[#690076]">
						<div className="p-2 bg-white rounded-md">
							<Image src="/static/img/muamalat.png" width={100} height={100} />
						</div>
						<CopyToClipboard
							text="3900002641"
							onCopy={() => alert("Berhasil disalin!")}>
							<div className="px-2 rounded-md mx-4">
								<p className="font-jkt font-semibold text-white">390-000-2641</p>
							</div>
						</CopyToClipboard>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "-20%" }}
						animate={{ opacity: 1, x: "0%" }}
						transition={{
							duration: 0.8,
							delay: 0.75,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="my-1 flex items-center justify-center rounded-lg w-fit bg-[#0060af]">
						<div className="p-2 bg-white rounded-md">
							<Image src="/static/img/bca.png" width={100} height={100} />
						</div>
						<CopyToClipboard
							text="6760416876"
							onCopy={() => alert("Berhasil disalin!")}>
							<div className="px-2 rounded-md mx-4">
								<p className="font-jkt font-semibold text-white">676-041-6876</p>
							</div>
						</CopyToClipboard>
					</motion.div>
					<button
						onClick={handleTransfer}
						className="mt-2 btn outline-none bg-green-600 stroke-none text-white">
						<BsWhatsapp className="mr-2" />
						Konfirmasi Transfer
					</button>
				</div>
			</div>
		</div>
	);
};

export default Wakaf;
