const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		content: [
			"./components/**/*.{js,ts,jsx,tsx}",
			"./pages/**/*.{js,ts,jsx,tsx}",
		],
		options: {
			whitelist: ['html[data-theme="dark"]'],
		},
	},
	theme: {
		darkSelector: 'html[data-theme="dark"]',
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderWidth: {
				0.5: "0.5px",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {
		backgroundColor: [
			"responsive",
			"dark",
			"hover",
			"dark-hover",
			"focus",
			"dark-focus",
		],
		textColor: [
			"responsive",
			"hover",
			"focus",
			"dark",
			"dark-hover",
			"dark-focus",
		],
		borderColor: [
			"responsive",
			"hover",
			"focus",
			"dark",
			"dark-hover",
			"dark-focus",
		],
	},
	plugins: [require("@tailwindcss/ui"), require("tailwindcss-dark-mode")()],
}
