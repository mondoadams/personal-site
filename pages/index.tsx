import Head from "next/head"
import Home from "@components/Home"
import Header from "@components/Header"
import styles from "./index.module.css"

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Joe Adams - Design & Code</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.root}>
				<Header />
				<Home />
			</div>
		</>
	)
}
