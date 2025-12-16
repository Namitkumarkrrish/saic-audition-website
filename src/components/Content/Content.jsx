import React from 'react'
import About from './about/About'
import Statement from './statement/Statement'
import styles from './Content.module.css'
const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.network}>
        <Statement />
      </div>
      <div className={styles.us}>
        <About />
      </div>
    </section>
  )
}

export default Content