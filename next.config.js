/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products/hoodies",
				destination: "/products/hoodies/1",
				permanent: false,
			},
			{
				source: "/products/accessories",
				destination: "/products/accessories/1",
				permanent: false,
			},
		];
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
			{
				protocol: "https",
				hostname: "tailwindui.com",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
