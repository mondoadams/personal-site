import { ThemeProvider } from "next-themes"

import "../styles/main.css"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
