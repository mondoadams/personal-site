import { useTheme } from "next-themes"

export default function ThemeChanger() {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<div>The current theme is: {theme}</div>
			<button onClick={() => setTheme("light")}>Light Mode</button>
			<button onClick={() => setTheme("dark")}>Dark Mode</button>
		</div>
	)
}
