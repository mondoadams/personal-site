import WorkBlock, { IWorkBlock } from "@components/WorkBlock"
import WorkList from "@components/WorkList"

import styles from "./Home.module.css"

const work: Omit<IWorkBlock, "number">[] = [
  {
    employer: "Pirate",
    role: "Senior Frontend Engineer",
    date: " "
  },
  {
    employer: "University of Cambridge",
    role: "Senior Product Designer & Developer",
    date: " "
  },
  {
    employer: "Green Energy Options",
    role: "Lead UX Designer & Developer",
    date: " "
  },
]

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={`col-span-12 md:col-span-8 lg:col-span-6 mt-10 md:mt-20`}>
          <div
            className={`font-sans text-xs tracking-wider flex flex-row justify-between pb-2 border-b-2 border-primary text-primary mx-8`}
          >
            <h1>Joe Adams</h1>
            <span>Bristol, UK</span>
          </div>
          <h3
            className={`font-serif text-2xl md:text-3xl leading-8 md:leading-10 tracking-wide pt-15 md:py-15 mx-8 md:mr-0 dark:text-gray-200`}
          >
            I'm a <strong>product engineer and designer</strong> focused on building functional things on the web. Currently at <strong><a className={`hover:text-primary`} href="https://pirate.com/">Pirate</a></strong> building the future of booking creative space. Previously at the <strong><a className={`hover:text-primary`} href="https://www.cam.ac.uk/">University of Cambridge</a></strong> shaping their new digital transformation strategy.
          </h3>
        </div>
        <div className={`col-span-8 col-start-3 md:col-span-4 lg:col-span-6 pt-0 md:pt-40 lg:pt-14 `}>
          <img className={styles.illo} src="/me_illo.png" alt="Illustration of me (Joe Adams)" />
        </div>

        <div className={`col-span-12 md:col-span-8 md:col-start-4`}>
          <div
            className={`text-foreground dark:text-gray-300 text-md md:text-lg flex flex-col md:flex-row mb-10 tracking-wide mx-8 md:mx-0`}
          >
            <p className={`pb-5 pr-12 md:pb-0`}>
              Most comfortable working on the interface of a product, pairing my design and development background, working from idea to production and delivery.
            </p>
            <p className={`md:pr-12`}>
              Currently I'm into; design systems, offline-first applications, state machines, GraphQL, serverless backend architecture & minimal configuration frontend infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className={`w-full`}>
        <WorkList>
          {work.map((work, i) => (
            <WorkBlock {...work} number={i} key={work.employer} />
          ))}
        </WorkList>
      </div>
    </div>
  )
}
