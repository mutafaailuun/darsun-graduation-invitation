import {
	Quicksand,
	Plus_Jakarta_Sans,
	Aref_Ruqaa,
	El_Messiri,
	Qwigley,
	Great_Vibes,
	Aref_Ruqaa_Ink
} from "next/font/google";

const jkt = Plus_Jakarta_Sans({ subsets: ["latin"] });
const qs = Quicksand({ subsets: ["latin"] });
const ar = Aref_Ruqaa({ weight: ["400"], subsets: ["latin"] });
const ari = Aref_Ruqaa({ weight: ["400"], subsets: ["latin"] });
const messiri = El_Messiri({ subsets: ["arabic"], variable: "--font-messiri" });
const qw = Qwigley({ weight: ["400"], subsets: ["latin"] });
const gv = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

export { jkt, qs, ar, messiri, qw, gv, ari };
