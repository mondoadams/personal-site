import { ThemeProvider } from "next-themes"

import "../styles/main.css"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			storageKey="mondo-nextTheme"
			disableTransitionOnChange={true}
		>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
