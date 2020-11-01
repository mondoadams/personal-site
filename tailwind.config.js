const plugin = require("tailwindcss/plugin")

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	theme: {
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
			"hover",
			"focus",
			"dark",
			"dark-hover",
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
	plugins: [
		require("@tailwindcss/ui"),
		plugin(function ({ addVariant, e }) {
			addVariant("dark", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `html[data-theme="dark"] .${e(`dark${separator}${className}`)}`
				})
			})
		}),
		plugin(function ({ addVariant, e }) {
			addVariant("dark-hover", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `html[data-theme="dark"] .${e(
						`dark-hover${separator}${className}`
					)}:hover`
				})
			})
		}),
		plugin(function ({ addVariant, e }) {
			addVariant("dark-focus", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `html[data-theme="dark"] .${e(
						`dark-focus${separator}${className}`
					)}:focus`
				})
			})
		}),
	],
}
