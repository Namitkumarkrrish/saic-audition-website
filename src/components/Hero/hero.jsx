import React from 'react'
import Left from './leftSide/left'
import styles from './Hero.module.css'
import Right from './rightside/Right'

const hero = () => {
  return (
    <div className={styles.main}>
        <div className={styles.leftPart}>
            <Left />
        </div>
        <div className={styles.rightPart}>
            <Right />
        </div>
    </div>
  )
}

export default hero