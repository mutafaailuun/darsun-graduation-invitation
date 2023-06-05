import { jkt, qw } from "../fonts";
import Darsun from "/public/svgs/Darsun.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Thanks = () => {
	return (
		<div className="z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			{/* <span className="p-2 bg-green-main rounded-full drop-shadow-md">
				<Darsun className="fill-[#FFFDEC] stroke-[#AA3609] w-14" />
			</span>
			<p className={`${jkt.className} ${"text-green-main my-2"}`}>
				Demikian Undangan ini kami sampaikan.
			</p>
			<h1 className={`${qw.className} ${"text-green-main text-7xl"}`}>
				Terima Kasih
			</h1> */}
			<h1>Clipboard Copy</h1>
			<CopyToClipboard text="text" onCopy={() => alert("Copied")}>
				<span>Copy to clipboard with span</span>
			</CopyToClipboard>
		</div>
	);
};

export default Thanks;
