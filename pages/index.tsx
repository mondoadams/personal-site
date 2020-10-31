import Head from "next/head"
import Home from "@components/Home"

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Joe Adams</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home />
		</>
	)
}
