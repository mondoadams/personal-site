import NotionButton from "@components/NotionButton"
import ThemeChanger from "@components/ThemeChanger"

import styles from "./Home.module.css"

export default function Home() {
	return (
		<div className={styles.root}>
			<h1 className={`bg-teal-400 text-2xl`}>Joe Adams</h1>
			<span>This is the home component</span>
			<ThemeChanger />
			<NotionButton>Click here to view in Notion</NotionButton>
		</div>
	)
}
