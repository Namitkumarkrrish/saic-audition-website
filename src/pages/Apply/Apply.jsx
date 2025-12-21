import { useState } from "react";
import styles from "./Apply.module.css"
const Apply=()=>{
  return (
    <section className={styles.applySection}>
      <h1>SAIC Auditions – 2K26</h1>

      <form className={styles.form} action="https://docs.google.com/forms/d/e/1FAIpQLSfwxCFDbzZidacArVsRsR4ySaeblfG40KxyXOT1YjDsdcVixw/formResponse
"> 

        {/* SECTION 1 */}

            <input name="entry.2005620554" type="text" placeholder="Full Name" required />

            <div className={styles.field}>
              <label>Year Of Study <span className={styles.required}>*</span></label>
              <select name="entry.1065046570"  required>
                <option value="" disabled selected style={{color:"rgba(255, 255, 255, 0.6);"}}>Select your year</option>
                <option style={{color:"black"}} value="1st Year">1st Year</option>
                <option style={{color:"black"}} value="2nd Year">2nd Year</option>
                <option style={{color:"black"}} value="3rd Year">3rd Year</option>
                <option style={{color:"black"}} value="4th Year">4th Year</option>
              </select>
            </div>

            {/* <input name="" type="email" placeholder="Email Address" required /> */}
            <input name="entry.2125450282" type="text" placeholder="Registration Number" required />
            <input name="entry.1045781291" type="text" placeholder="Roll Number" required />
            <input name="entry.1166974658" type="text" placeholder="Department" required />
            <input name="entry.839337160" type="tel" placeholder="WhatsApp Number" required />

        {/* SECTION 2 */}
            
            <div className={styles.ratingRow}>
  <label>Anchoring <span>*</span></label>

  <div className={styles.options}>
    <label><input type="radio" name="entry.439228923" value="1" required />1</label>
    <label><input type="radio" name="entry.439228923" value="2" />2</label>
    <label><input type="radio" name="entry.439228923" value="3" />3</label>
    <label><input type="radio" name="entry.439228923" value="4" />4</label>
    <label><input type="radio" name="entry.439228923" value="5" />5</label>
    <label><input type="radio" name="entry.439228923" value="6" />6</label>
    <label><input type="radio" name="entry.439228923" value="7" />7</label>
  </div>
  <label>Video Editing <span>*</span></label>
  <div className={styles.options}>
    <label><input type="radio" name="entry.627455496" value="1" required />1</label>
    <label><input type="radio" name="entry.627455496" value="2" />2</label>
    <label><input type="radio" name="entry.627455496" value="3" />3</label>
    <label><input type="radio" name="entry.627455496" value="4" />4</label>
    <label><input type="radio" name="entry.627455496" value="5" />5</label>
    <label><input type="radio" name="entry.627455496" value="6" />6</label>
    <label><input type="radio" name="entry.627455496" value="7" />7</label>
  </div>
  <label>Graphics Designing <span>*</span></label>
  <div className={styles.options}>
    <label><input type="radio" name="entry.1505286642" value="1" required />1</label>
    <label><input type="radio" name="entry.1505286642" value="2" />2</label>
    <label><input type="radio" name="entry.1505286642" value="3" />3</label>
    <label><input type="radio" name="entry.1505286642" value="4" />4</label>
    <label><input type="radio" name="entry.1505286642" value="5" />5</label>
    <label><input type="radio" name="entry.1505286642" value="6" />6</label>
    <label><input type="radio" name="entry.1505286642" value="7" />7</label>
  </div>
  <label>Web Development <span>*</span></label>
  <div className={styles.options}>
    <label><input type="radio" name="entry.873966814" value="1" required />1</label>
    <label><input type="radio" name="entry.873966814" value="2" />2</label>
    <label><input type="radio" name="entry.873966814" value="3" />3</label>
    <label><input type="radio" name="entry.873966814" value="4" />4</label>
    <label><input type="radio" name="entry.873966814" value="5" />5</label>
    <label><input type="radio" name="entry.873966814" value="6" />6</label>
    <label><input type="radio" name="entry.873966814" value="7" />7</label>
  </div>
  <label>Event Management <span>*</span></label>
  <div className={styles.options}>
    <label><input type="radio" name="entry.361907886" value="1" required />1</label>
    <label><input type="radio" name="entry.361907886" value="2" />2</label>
    <label><input type="radio" name="entry.361907886" value="3" />3</label>
    <label><input type="radio" name="entry.361907886" value="4" />4</label>
    <label><input type="radio" name="entry.361907886" value="5" />5</label>
    <label><input type="radio" name="entry.361907886" value="6" />6</label>
    <label><input type="radio" name="entry.361907886" value="7" />7</label>
  </div>
  <label>PhotoGraphy/Videography <span>*</span></label>
  <div className={styles.options}>
    <label><input type="radio" name="entry.199335614" value="1" required />1</label>
    <label><input type="radio" name="entry.199335614" value="2" />2</label>
    <label><input type="radio" name="entry.199335614" value="3" />3</label>
    <label><input type="radio" name="entry.199335614" value="4" />4</label>
    <label><input type="radio" name="entry.199335614" value="5" />5</label>
    <label><input type="radio" name="entry.199335614" value="6" />6</label>
    <label><input type="radio" name="entry.199335614" value="7" />7</label>
  </div>
</div>

        

        {/* SECTION 3 */}
            <textarea
              placeholder="Why do you want to join SAIC?"
              rows="4"
              name="entry.225900497"
              required
            ></textarea>

            <textarea
              placeholder="Why should SAIC consider you?"
              rows="3"
              name="entry.234889679"
              required
            ></textarea>

            <textarea
              placeholder="Your Hobby (optional)"
              rows="2"
              name="entry.370775349"
            ></textarea>

            <textarea
              placeholder="Your favorite anime/movie/tv show (optional)"
              rows="1"
              name="entry.1825280227"
              style={{height:"65.33px"}}
            ></textarea>

            <div className={styles.navBtns}>
              <button type="submit">
                Submit
              </button>
            </div>

      </form>
    </section>
  );
};

export default Apply;
