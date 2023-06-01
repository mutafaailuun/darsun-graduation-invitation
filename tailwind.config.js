/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			lg: "425px",
			md: "380px",
			s: "320px",
			xs: "100px",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-messiri)"],
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
	},
	plugins: [require("daisyui")],
};
