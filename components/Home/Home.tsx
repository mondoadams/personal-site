import NotionButton from "@components/NotionButton"
import ThemeChanger from "@components/ThemeChanger"
import WorkBlock from "@components/WorkBlock"

import styles from "./Home.module.css"

export default function Home() {
	return (
		<div className={styles.root}>
			<Noise />
			<div className={`grid grid-cols-1 gap-5 md:grid-cols-12`}>
				<h3
					className={`col-span-5 font-serif text-2xl antialiased leading-8 dark:text-gray-300`}
				>
					I’m an independent <strong>frontend developer</strong> and{" "}
					<strong>designer</strong> focused on creating functional and engaging
					web products. I've been most recently working with the{" "}
					<strong>University of Cambridge</strong>, helping shape and build
					their new digital transformation strategy.
				</h3>
				<h1 className={`col-span-6 text-lg font-sans`}>Joe Adams</h1>
				<WorkBlock className={`col-span-4`} />
				<div className={`col-span-6 col-start-5 mb-4 text-gray-700 text-lg`}>
					<p className={`pb-6`}>
						I’m an independent designer and developer resource created by
						Jeremiah Shoaf. The site gets over 350,000 unique visitors a month;
						running it is expensive and time consuming. If you find University
						of Cambridge, please consider supporting the site to help make it a
						sustainable side project.
					</p>
					<p>
						I’m an independent designer and developer resource created by
						Jeremiah Shoaf. The site gets over 350,000 unique visitors a month;
						running it is expensive and time consuming. If you find University
						of Cambridge, please consider supporting the site to help make it a
						sustainable side project.
					</p>
				</div>
			</div>

			<ThemeChanger />
			<NotionButton>View portfolio of work</NotionButton>
		</div>
	)
}
