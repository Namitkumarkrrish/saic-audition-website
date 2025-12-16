import React from 'react'
import style from './Statement.module.css'
import bgImage from '../../../assets/EmeraldBackground.jpg'

const Statement = () => {
  return (
    <div
      className={style.statement}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      NetWork <span id='s1'>Is</span> <span>NetWorth</span>
    </div>
  )
}

export default Statement
