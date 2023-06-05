import { useEffect, useRef, useState } from "react";
import { jkt, messiri } from "../fonts";
import axios from "axios";
import { motion } from "framer-motion";

const Comments = () => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [comments, setComments] = useState("");
	const messageEndRef = useRef(null);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const response = await axios.get("http://localhost:5000/users");
		setUsers(response.data);
	};
	const saveUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/users", {
				name,
				comments,
			});

			setName("");
			setComments("");
			getUsers();
			messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="z-20 -mt-[60px] flex items-center flex-col justify-center h-screen overflow-hidden">
			<div className="w-full px-10">
				<motion.h1
					initial={{ opacity: 0, y: "-20%" }}
					animate={{ opacity: 1, y: "0%" }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className={`${
						messiri.className
					} ${`text-green-main font-black text-center text-xl`}`}>
					Kartu Ucapan
				</motion.h1>
				<motion.div
					ref={messageEndRef}
					initial={{ opacity: 0, x: "-20%" }}
					animate={{ opacity: 1, x: "0%" }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className={`${
						jkt.className
					} ${`flex flex-col pl-5 py-3 rounded-2xl border-2 max-h-[30vh]  overflow-scroll overflow-x-hidden scrollbar border-green-main scroll-smooth`}`}>
					{users.map((user, index) => (
						<div key={user.id}>
							<h3
								className={`${jkt.className} ${`text-red-main font-bold text-base`}`}>
								{user.name}
							</h3>
							<p className="text-sm text-justify text-green-main">{user.comments}</p>
							{index !== users.length - 1 && <hr className="my-3 border-[#E7C494]" />}
						</div>
					))}
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, x: "20%" }}
				animate={{ opacity: 1, x: "0%" }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				className="max-h-[50vh] w-full px-10">
				<h1
					className={`${
						messiri.className
					} ${`pt-5 pb-1 text-red-main font-black text-center text-xl`}`}>
					Kirim Ucapan
				</h1>
				<div
					className={`${
						jkt.className
					} ${`p-3 rounded-2xl border-2 border-red-main`}`}>
					<form
						onSubmit={saveUser}
						className="w-full p-0 flex flex-col items-center justify-center">
						<input
							type="text"
							placeholder="Nama"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={`${
								jkt.className
							} ${"bg-[#eeead6] p-2 focus:outline border-red-main rounded-lg input input-bordered text-red-main placeholder:text-red-main placeholder:text-opacity-60 w-full"}`}
						/>
						<textarea
							type="text"
							placeholder="Ketik Ucapan"
							value={comments}
							onChange={(e) => setComments(e.target.value)}
							className={`${
								jkt.className
							} ${`bg-[#eeead6] border-red-main p-2 my-2 rounded-lg input text-red-main h-32 w-full placeholder:text-red-main placeholder:text-opacity-60`}`}></textarea>
						<button
							type="submit"
							className="btn w-full border-none bg-red-main hover:bg-gradient-to-r from-[#957314] to-[#C09F3D] text-[#eeead6]">
							Kirim
						</button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default Comments;
