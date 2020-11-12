import React from "react"
import cn from "classnames"
import styles from "./WorkBlock.module.css"

export default function WorkBlock({
	className = {},
	number = "01",
	project = "Digital transformation strategy",
	client = "University of Cambridge",
	role = "Product design & development",
	link = "#",
}) {
	return (
		<a href={link}>
			<div className={cn(styles.root, className)}>
				<div className={styles.content}>
					<span className={styles.number}>
						<em>{number}</em>
					</span>
					<h4 className={styles.project}>{project}</h4>
					<div className={styles.client}>
						<h5>{client}</h5>
						<h6 className={`font-sans text-xs`}>{role}</h6>
					</div>
				</div>
			</div>
		</a>
	)
}
