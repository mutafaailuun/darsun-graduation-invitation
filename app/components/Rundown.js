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
				} ${`text-center text-5xl border-collapse text-red-main`}`}>
				Rundown Acara
			</h1>

			<div className="relative mb-3 overflow-y-scroll scrollbar text-white">
				<table
					className={`${
						jkt.className
					} ${`relative w-full bg-red-main bg-opacity-80 table-compact rounded-xl overflow-y-scroll text-center`}`}>
					{/* head */}
					<thead>
						<tr className="text-left my-2">
							{/* <th className="border border-l-0 border-t-0 border-black text-center text-sm">
								No
							</th> */}
							<th className="border border-l-0 border-t-0 border-r-0 rounded-t-xl border-black pl-2 text-center bg-red-950">
								Kegiatan
							</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">1</td> */}
							<td className="border-r-0 border-black pl-2 text-center">Pra-Acara</td>
						</tr>
						{/* row 2 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">2</td> */}
							<td className="border border-r-0 border-black pl-2">Pembukaan</td>
						</tr>
						{/* row 3 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">3</td> */}
							<td className="border border-r-0 border-black pl-2">
								Pembacaan Ayat Suci Al-Qur&apos;an
							</td>
						</tr>
						{/* row 4 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">4</td> */}
							<td className="border border-r-0 border-black pl-2">
								Pembacaan al-Mandzumah al-Baiquniyah
							</td>
						</tr>
						{/* row 5 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">5</td> */}
							<td className="border border-r-0 border-black pl-2">Prosesi Wisuda</td>
						</tr>
						{/* row 6 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">6</td> */}

							<td className="border border-r-0 border-black pl-2">
								Pengumuman Tiga Wisudawan Terbaik dan Pemberian Piagam Penghargaan
							</td>
						</tr>
						{/* row 7 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">7</td> */}
							<td className="border border-r-0 border-black pl-2">
								Sambutan-sambutan
							</td>
						</tr>
						{/* row 8 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">8</td> */}
							<td className="border border-r-0 border-black pl-2">Ceramah Agama</td>
						</tr>
						{/* row 9 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">9</td> */}
							<td className="border border-r-0 border-black pl-2">Peluncuran Buku</td>
						</tr>
						{/* row 10 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">10</td> */}
							<td className="border border-r-0 border-black pl-2">Puisi</td>
						</tr>
						{/* row 11 */}
						<tr>
							{/* <td className="border border-l-0 border-black pl-2">11</td> */}
							<td className="border border-r-0 border-black pl-2">Nasyid</td>
						</tr>
						{/* row 9 */}
						<tr>
							{/* <td className="border border-b-0 border-l-0 border-black pl-2">13</td> */}
							<td className="border-r-0 border-b-0 border-black pl-2">
								Penutup dan Do&apos;a
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Asset3 className="w-54 mb-3 rotate-180" />
		</div>
	);
}
