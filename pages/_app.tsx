import { ThemeProvider } from "next-themes"
import Head from "next/head"

import "../styles/main.css"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			storageKey="mondo-nextTheme"
			disableTransitionOnChange={true}
		>
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
