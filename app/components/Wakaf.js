import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsWhatsapp } from "react-icons/bs";

const Wakaf = () => {
	const handleTransfer = () => {
		window.open("https://wa.me/6281319645690?");
	};
	return (
		<div className="relative z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<div className="px-8">
				<Image
					src="/static/img/wakaf-new.jpg"
					width={400}
					height={400}
					alt=""
					className="rounded-lg drop-shadow-md"
				/>

				<p className="text-center font-jkt text-green-main mt-2">
					Salurkan donasi terbaik Anda melalui:
				</p>
				<div className="flex flex-col items-center justify-center">
					<div className="my-2 flex items-center justify-center rounded-lg w-fit bg-white">
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
					</div>
					<div className="my-2 flex items-center justify-center rounded-lg w-fit bg-[#690076]">
						<div className="p-2 bg-white rounded-md">
							<Image src="/static/img/muamalat.png" width={100} height={100} />
						</div>
						<CopyToClipboard text="3900002641" onCopy={() => alert("Copied")}>
							<div className="px-2 rounded-md mx-4">
								<p className="font-jkt font-semibold text-white">390-000-2641</p>
							</div>
						</CopyToClipboard>
					</div>
					<div className="my-2 flex items-center justify-center rounded-lg w-fit bg-[#0060af]">
						<div className="p-2 bg-white rounded-md">
							<Image src="/static/img/bca.png" width={100} height={100} />
						</div>
						<CopyToClipboard text="6760416876" onCopy={() => alert("Copied")}>
							<div className="px-2 rounded-md mx-4">
								<p className="font-jkt font-semibold text-white">676-041-6876</p>
							</div>
						</CopyToClipboard>
					</div>
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
