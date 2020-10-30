import styles from "./Home.module.css"

export default function Home() {
	return (
		<div className={styles.root}>
			This is the home component
			<h1 className={`bg-teal-400`}>Joe Adams</h1>
		</div>
	)
}
