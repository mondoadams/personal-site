const plugin = require("tailwindcss/plugin")

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
		// backgroundColor: ({ after }) => after(["dark", "dark-hover", "dark-focus"]),
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
	plugins: [
		require("@tailwindcss/ui"),
		require("tailwindcss-dark-mode")(),
		// plugin(function ({ addVariant, e }) {
		// 	addVariant("dark", ({ modifySelectors, separator }) => {
		// 		modifySelectors(({ className }) => {
		// 			return `html[data-theme="dark"] .${e(`dark${separator}${className}`)}`
		// 		})
		// 	})
		// }),
		// plugin(function ({ addVariant, e }) {
		// 	addVariant("dark-hover", ({ modifySelectors, separator }) => {
		// 		modifySelectors(({ className }) => {
		// 			return `html[data-theme="dark"] .${e(
		// 				`dark-hover${separator}${className}`
		// 			)}:hover`
		// 		})
		// 	})
		// }),
		// plugin(function ({ addVariant, e }) {
		// 	addVariant("dark-focus", ({ modifySelectors, separator }) => {
		// 		modifySelectors(({ className }) => {
		// 			return `html[data-theme="dark"] .${e(
		// 				`dark-focus${separator}${className}`
		// 			)}:focus`
		// 		})
		// 	})
		// }),
	],
}
