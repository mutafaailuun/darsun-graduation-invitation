import React, { useEffect, useRef, useState } from "react";
import { jkt, messiri } from "../fonts";
import axios from "axios";

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
		<div className="z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
			<div className="w-full px-10">
				<h1
					className={`${messiri.className} ${`text-[#E7C494] text-center text-xl`}`}>
					Kartu Ucapan
				</h1>
				<div
					ref={messageEndRef}
					className={`${
						jkt.className
					} ${`flex flex-col pl-5 py-3 rounded-2xl border-2 max-h-[30vh]  overflow-scroll overflow-x-hidden scrollbar border-[#E7C494] scroll-smooth`}`}>
					{users.map((user, index) => (
						<div key={user.id}>
							<h3
								className={`${jkt.className} ${`text-[#E7C494] font-bold text-base`}`}>
								{user.name}
							</h3>
							<p className="text-sm text-justify">{user.comments}</p>
							{index !== users.length - 1 && <hr className="my-3 border-[#E7C494]" />}
						</div>
					))}
				</div>
			</div>
			<div className="max-h-[50vh] w-full px-10">
				<h1
					className={`${
						messiri.className
					} ${`pt-5 pb-1 text-[#E7C494] text-center text-xl`}`}>
					Kirim Ucapan
				</h1>
				<div
					className={`${
						jkt.className
					} ${`p-3 rounded-2xl border-2 border-[#E7C494]`}`}>
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
							} ${"bg-[#1a1a1a] p-2 focus:outline-none border-amber-200 rounded-lg input input-bordered input-warning w-full"}`}
						/>
						<textarea
							type="text"
							placeholder="Ketik Ucapan"
							value={comments}
							onChange={(e) => setComments(e.target.value)}
							className={`${
								jkt.className
							} ${`bg-[#1a1a1a] border-amber-200 p-2 my-2 rounded-lg input h-32 w-full`}`}></textarea>
						<button type="submit" className="btn btn-warning">
							Kirim
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Comments;
