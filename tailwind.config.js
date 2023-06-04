/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
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
			colors: {
				"red-main": "#AA3609",
				"green-main": "#373F10",
				vanilla: "#FFFDEC",
			},
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
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
