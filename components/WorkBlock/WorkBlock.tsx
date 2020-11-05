import React from "react"
import cn from "classnames"
import styles from "./WorkBlock.module.css"

export default function WorkBlock({ className }) {
	return (
		<div className={cn(styles.root, className)}>
			<span className={styles.number}>01</span>
			<h4 className={styles.project}>Digital transformation strategy</h4>
			<h4 className={styles.client}>University of Cambridge</h4>
		</div>
	)
}
