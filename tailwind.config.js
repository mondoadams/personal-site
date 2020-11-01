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
		backgroundColor: ({ after }) => after(["dark", "dark-hover"]),
		textColor: ({ after }) => after(["dark"]),
		borderColor: ({ after }) => after(["dark"]),
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
	],
}
