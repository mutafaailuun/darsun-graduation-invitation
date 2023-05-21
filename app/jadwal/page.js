"use client";
import React from "react";
import { messiri } from "../fonts";

export default function Jadwal() {
	return (
		<div className="relative overflow-x-auto mx-10 py-9">
			<h1
				className={`${
					messiri.className
				} ${`text-center table-fixed border-collapse`}`}>
				Rundown Acara
			</h1>
			<table className={`${messiri.className} ${`table w-full text-sm`}`}>
				{/* head */}
				<thead>
					<tr className="text-left">
						<th className="border border-white text-center">No</th>
						<th className="border border-white pl-2">Waktu</th>
						<th className="border border-white pl-2">Kegiatan</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					<tr>
						<td className="border border-white pl-2">1</td>
						<td className="border border-white pl-2 text-sm">05.00 - 06.00</td>
						<td className="border border-white pl-2">Mandi dan Tata Rias</td>
					</tr>
					{/* row 2 */}
					<tr>
						<td className="border border-white pl-2">2</td>
						<td className="border border-white pl-2 text-sm">06.00 - 07.00</td>
						<td className="border border-white pl-2">
							Sarapan dan Persiapan Akomodasi
						</td>
					</tr>
					{/* row 3 */}
					<tr>
						<td className="border border-white pl-2">3</td>
						<td className="border border-white pl-2 text-sm">08.00 - 09.00</td>
						<td className="border border-white pl-2">
							Pemberangkatan dan Registrasi Wisudawan
						</td>
					</tr>
					{/* row 4 */}
					<tr>
						<td className="border border-white pl-2">4</td>
						<td className="border border-white pl-2 text-sm">09.00 - 09.10</td>
						<td className="border border-white pl-2">Pembukaan</td>
					</tr>
					{/* row 5 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
					{/* row 6 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
					{/* row 7 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
					{/* row 8 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
					{/* row 9 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
					{/* row 10 */}
					<tr>
						<td className="border border-white pl-2">5</td>
						<td className="border border-white pl-2 text-sm">09.10 - 09.25</td>
						<td className="border border-white pl-2">
							Pembacaan Ayat Suci Al-Qur'an
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
