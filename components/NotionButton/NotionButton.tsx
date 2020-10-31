import styles from "./NotionButton.module.css"

export default function NotionButton({ children }) {
	return <button className={styles.root}>{children}</button>
}
