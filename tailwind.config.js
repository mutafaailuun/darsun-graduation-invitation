/** @type {import('tailwindcss').Config} */

import { El_Messiri, Plus_Jakarta_Sans } from "next/font/google";

// eslint-disable-next-line no-undef
export const content = [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	screens: {
		lg: "425px",
		md: "380px",
		s: "320px",
		xs: "100px",
	},
	extend: {
		fontFamily: {
			jkt: Plus_Jakarta_Sans,
			messiri: El_Messiri,
		},
		colors: {
			"red-main": "#AA3609",
			"green-main": "#373F10",
			vanilla: "#FFFDEC",
		},
		animation: {
			"spin-slow": "spin 50s linear infinite",
			"reverse-spin": "reverse-spin 50s linear infinite",
		},
		backgroundImage: {
			hero: "./public/BG.png",
		},
		keyframes: {
			"reverse-spin": {
				from: {
					transform: "rotate(360deg)",
				},
			},
		},
	},
};
// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];
