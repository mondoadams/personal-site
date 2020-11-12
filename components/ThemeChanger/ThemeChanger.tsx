import React from "react"
import { useTheme } from "next-themes"

export default function ThemeChanger() {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme } = useTheme()

	React.useEffect(() => setMounted(true), [])

	if (!mounted) {
		return <div>Loading...</div>
	} else {
		return theme === "light" ? (
			<button onClick={() => setTheme("dark")}>Dark Mode</button>
		) : (
			<button onClick={() => setTheme("light")}>Light Mode</button>
		)
	}
}
