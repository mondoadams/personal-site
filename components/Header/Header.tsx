import React from "react"
import ThemeChanger from "@components/ThemeChanger"

export default function Header() {
	return (
		<div
			className={`max-w-6xl w-full m-auto text-right flex flex-row pt-6 font-sans text-xs`}
		>
			<h6 className={`ml-auto`}>Github</h6>
			<h6 className={`px-4`}>Email</h6>
			<ThemeChanger />
		</div>
	)
}
