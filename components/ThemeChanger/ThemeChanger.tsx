import React from "react"
import { useTheme } from "next-themes"

export default function ThemeChanger() {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme } = useTheme()

	React.useEffect(() => setMounted(true), [])

	if (!mounted) {
		return <div>Skeleton of button here</div>
	} else {
		return (
			<div>
				<div>{theme}</div>
				<button onClick={() => setTheme("light")}>Light Mode</button>
				<button onClick={() => setTheme("dark")}>Dark Mode</button>
			</div>
		)
	}
}
