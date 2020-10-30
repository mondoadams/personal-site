import React from "react"
import { useTheme } from "next-themes"
import { SunIcon } from "@modulz/radix-icons"

export default function ThemeChanger() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => theme === "light" ? setTheme("dark") : setTheme("light")

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <button onClick={toggleTheme} className={`w-10 h-10 m-2 hover:opacity-75 focus:outline-none`}>
      <SunIcon className={`m-auto text-foreground`} />
    </button>
  )
}
