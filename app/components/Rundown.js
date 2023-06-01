"use client";

import { jkt, qw } from "../fonts";
import Asset3 from "/public/svgs/Asset-3.svg";

export default function Rundown() {
	return (
		<div className="relative mx-10 z-20 -mt-14 flex items-center flex-col justify-center h-screen overflow-hidden">
			<Asset3 className="w-54 mt-20" />
			<h1
				className={`${
					qw.className
				} ${`text-center text-5xl border-collapse text-[#E7C494]`}`}>
				Rundown Acara
			</h1>

			<div className="relative mb-3 overflow-y-scroll scrollbar">
				<table
					className={`${
						jkt.className
					} ${`relative w-full bg-amber-200 bg-opacity-30 table-compact rounded-xl overflow-y-scroll`}`}>
					{/* head */}
					<thead>
						<tr className="text-left my-2">
							<th className="border border-l-0 border-t-0 border-black text-center text-sm">
								No
							</th>
							<th className="border border-l-0 border-t-0 border-black pl-2">Waktu</th>
							<th className="border border-l-0 border-t-0 border-r-0 border-black pl-2">
								Kegiatan
							</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">1</td>
							<td className="border border-black pl-2 text-sm">05.00 - 06.00</td>
							<td className="border-r-0 border-black pl-2">Mandi dan Tata Rias</td>
						</tr>
						{/* row 2 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">2</td>
							<td className="border border-black pl-2 text-sm">06.00 - 07.00</td>
							<td className="border border-r-0 border-black pl-2">
								Sarapan dan Persiapan Akomodasi
							</td>
						</tr>
						{/* row 3 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">3</td>
							<td className="border border-black pl-2 text-sm">08.00 - 09.00</td>
							<td className="border border-r-0 border-black pl-2">
								Pemberangkatan dan Registrasi Wisudawan
							</td>
						</tr>
						{/* row 4 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">4</td>
							<td className="border border-black pl-2 text-sm">09.00 - 09.10</td>
							<td className="border border-r-0 border-black pl-2">Hadrah Pembuka</td>
						</tr>
						{/* row 5 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">5</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">Pembukaan</td>
						</tr>
						{/* row 6 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">6</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Pembacaan Ayat Suci Al-Qur&apos;an
							</td>
						</tr>
						{/* row 7 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">7</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Prosesi Wisuda Madrasah Darus-Sunnah
							</td>
						</tr>
						{/* row 8 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">8</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Prosesi Wisuda Ma&apos;had Darus-Sunnah
							</td>
						</tr>
						{/* row 9 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">9</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Penganugerahan Wisudawan Terbaik
							</td>
						</tr>
						{/* row 10 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">10</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Sambutan Wisudawan Santri & Mahasantri
							</td>
						</tr>
						{/* row 11 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">11</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Penganugerahan Wali Wisudawan
							</td>
						</tr>
						{/* row 9 */}
						<tr>
							<td className="border border-l-0 border-black pl-2">12</td>
							<td className="border border-black pl-2 text-sm">09.10 - 09.25</td>
							<td className="border border-r-0 border-black pl-2">
								Penampilan Nasyid
							</td>
						</tr>
						{/* row 10 */}
						<tr>
							<td className="border border-b-0 border-l-0 border-black pl-2">13</td>
							<td className="border border-b-0 border-black pl-2 text-sm">
								09.10 - 09.25
							</td>
							<td className="border-r-0 border-b-0 border-black pl-2">Penutup</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Asset3 className="w-54 mb-3 rotate-180" />
		</div>
	);
}
