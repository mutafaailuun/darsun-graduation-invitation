/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			phone: "500px",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-messiri)"],
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
				"reverse-spin": "reverse-spin 20s linear infinite",
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
	plugins: [],
};
