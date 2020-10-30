import React from "react"
import ThemeChanger from "@components/ThemeChanger"
import { GitHubLogoIcon, EnvelopeClosedIcon } from "@modulz/radix-icons"
import * as Popover from "@radix-ui/react-popover"


export default function Header() {

  const handleEmailClick = () => {

  }

  return (
    <div className={`max-w-6xl w-full m-auto flex flex-row`}>
      <a href="https://github.com/mondoadams" className={`ml-auto m-2 hover:opacity-75`}>
        <button className={`w-10 h-10 focus:outline-none`}>
          <GitHubLogoIcon className={`text-foreground m-auto`} />
        </button>
      </a>
      <Popover.Root>
        <Popover.Trigger className={`w-10 h-10 m-2 hover:opacity-75 focus:outline-none`} onClick={() => { navigator.clipboard.writeText("joe@people.design") }}>
          <EnvelopeClosedIcon className={`text-foreground m-auto`} />
        </Popover.Trigger>
        <Popover.Content className={`focus:outline-none bg-gray-900 text-white transition-all w-52 text-center rounded-sm shadow-md`}>
          <div className={`p-2 font-sans`} style={{ fontSize: "8px" }}>Email copied to clipboard</div>
        </Popover.Content>
      </Popover.Root>
      <ThemeChanger />
    </div>
  )
}
