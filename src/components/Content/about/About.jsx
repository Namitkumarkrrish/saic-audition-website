import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h2>About Us</h2>
        <p>
          The Students’ Alumni Interaction Cell (SAIC) connects the students of
          NIT Durgapur with its alumni community to foster guidance, mentorship,
          and meaningful professional interactions.
        </p>
        <p>
          Through talks, events, and collaborations, SAIC builds a strong network
          where experience meets ambition — helping students grow beyond the
          classroom.
        </p>
      </div>
    </div>
  )
}

export default About
