import NotionButton from "@components/NotionButton"
import ThemeChanger from "@components/ThemeChanger"
import WorkBlock from "@components/WorkBlock"
import WorkList from "@components/WorkList"

import styles from "./Home.module.css"

export default function Home() {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<div className={`col-span-6 mt-20`}>
					<div
						className={`font-sans text-xs tracking-wider flex flex-row justify-between pb-2 border-b-2 border-primary text-primary`}
					>
						<h1>Joe Adams</h1>
						<span>Bristol, UK</span>
					</div>
					<h3
						className={`font-serif text-3xl antialiased leading-10 py-15 dark:text-gray-300`}
					>
						I’m an independent <strong>frontend developer</strong> and{" "}
						<strong>designer</strong> focused on creating functional and
						engaging web products. I've been most recently working with the{" "}
						<strong>University of Cambridge</strong>, helping shape and build
						their new digital transformation strategy.
					</h3>
				</div>
				<div className={`col-span-6`}>
					<img src="/me_illo.png" />
				</div>

				<div className={`col-span-8 col-start-4`}>
					<div
						className={`text-foreground text-lg flex flex-row mb-10 tracking-wide`}
					>
						<p className={`pr-10`}>
							I’m an independent designer and developer resource created by
							Jeremiah Shoaf. The site gets over 350,000 unique visitors a
							month; running it is expensive and time consuming. If you find
							University of Cambridge, please consider supporting the site to
							help make it a sustainable side project.
						</p>
						<p>
							Right now I'm into; <strong>serverless</strong>, state machines
							and developer resource created by Jeremiah Shoaf. The site gets
							over 350,000 unique visitors a month; running it is expensive and
							time consuming. If you find University of Cambridge, please
							consider supporting the site to help make it a sustainable side
							project.
						</p>
					</div>
				</div>
			</div>
			<div className={`w-full`}>
				<WorkList className={``}>
					<WorkBlock number="01" project="Digital transformation strategy" />
					<WorkBlock number="02" project="Research dashboard" />
					<WorkBlock number="03" project="Information asset register" />
					<WorkBlock
						number="04"
						project="Cosy, smart thermostat"
						client="Geo"
						link="https://www.notion.so/people/Cosy-smart-thermostat-260252b0569041519e7893b9c1fec887"
					/>
				</WorkList>
			</div>
		</div>
	)
}
