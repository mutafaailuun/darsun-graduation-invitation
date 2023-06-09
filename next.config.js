/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: false,
	experimental: {
		appDir: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};

module.exports = nextConfig;
