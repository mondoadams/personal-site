import { useTheme } from "next-themes"

export default function ThemeChanger() {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			{theme === "light" ? <div>Light</div> : <div>Dark</div>}
			<button onClick={() => setTheme("light")}>Light Mode</button>
			<button onClick={() => setTheme("dark")}>Dark Mode</button>
		</div>
	)
}
