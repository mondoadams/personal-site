import NotionButton from "@components/NotionButton"
import ThemeChanger from "@components/ThemeChanger"

import styles from "./Home.module.css"

export default function Home() {
	return (
		<div className={styles.root}>
			<h1
				className={`bg-teal-400 text-2xl hover:bg-teal-700 dark:bg-white dark:text-teal-400 dark-hover:bg-blue-500 dark-focus:bg-gray-600`}
			>
				Joe Adams
			</h1>
			<span>This is the home component</span>
			<ThemeChanger />
			<NotionButton>Click here to view in Notion</NotionButton>
		</div>
	)
}
