import React from "react"
import cn from "classnames"
import styles from "./WorkList.module.css"

export default function WorkList({ className = {}, children }) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={`max-w-6xl m-auto`}>
        <h4 className={`font-sans text-3xl md:text-5xl text-accent px-8`}>Work</h4>
      </div>
      <div className={styles.list}>{children}</div>
    </div>
  )
}
