import React from "react"
import cn from "classnames"
import styles from "./WorkBlock.module.css"

export interface IWorkBlock {
  employer: string
  role: string
  number: number
  date: string
  link?: string
  className?: string
}

const WorkBlock: React.FC<IWorkBlock> = ({
  employer,
  role,
  number,
  date,
  className = "",
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.content}>
        <span className={styles.number}>
          <em>0{number + 1}</em>
        </span>
        <h4 className={styles.project}>{employer}</h4>
        <div className={styles.client}>
          <h6 className={styles.role}>{role}</h6>
          <h5>{date}</h5>
        </div>
      </div>
    </div>
  )
}



export default WorkBlock
