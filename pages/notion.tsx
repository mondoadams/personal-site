import Head from "next/head"

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Notion - Joe Adams</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<iframe
					src="https://www.notion.so/Cosy-smart-thermostat-260252b0569041519e7893b9c1fec887"
					height="100%"
					width="100%"
					title="Iframe Example"
				></iframe>
			</div>
		</>
	)
}
