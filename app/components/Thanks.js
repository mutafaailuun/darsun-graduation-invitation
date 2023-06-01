import { jkt, qw } from "../fonts";
import Darsun from "/public/svgs/Darsun.svg";


const Thanks = () => {
	return (
		<div className="z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
			<Darsun className="fill-[#E7C494] w-14 mb-2" />
         <p className={`${jkt.className} ${'text-white my-2'}`}>Demikian Undangan ini kami sampaikan.</p>
         <h1 className={`${qw.className} ${'text-amber-200 text-7xl'}`}>Terima Kasih</h1>
		</div>
	);
};

export default Thanks;
