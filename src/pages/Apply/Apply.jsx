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


            
              <label>Choose your domains as per your choice<span className={styles.required}>*</span></label>
              <select name="entry.439228923"  required>
                <option value="" disabled selected style={{color:"rgba(255, 255, 255, 0.6);"}}>1st Preference</option>
                <option style={{color:"black"}} value="Video Editing">Video Editing</option>
                <option style={{color:"black"}} value="Graphic Designing">Graphic Designing</option>
                <option style={{color:"black"}} value="Content Writing">Content Writing</option>
                <option style={{color:"black"}} value="Web-Development">Web-Development</option>
                <option style={{color:"black"}} value="Photography/Videography">Photography/Videography</option>
                <option style={{color:"black"}} value="Event Management">Event Management</option>
              </select>

              <select name="entry.627455496"  required>
                <option value="" disabled selected style={{color:"rgba(255, 255, 255, 0.6);"}}>2nd Preference</option>
                <option style={{color:"black"}} value="Video Editing">Video Editing</option>
                <option style={{color:"black"}} value="Graphic Designing">Graphic Designing</option>
                <option style={{color:"black"}} value="Content Writing">Content Writing</option>
                <option style={{color:"black"}} value="Web-Development">Web-Development</option>
                <option style={{color:"black"}} value="Photography/Videography">Photography/Videography</option>
                <option style={{color:"black"}} value="Event Management">Event Management</option>
              </select>

              <select name="entry.1505286642"  required>
                <option value="" disabled selected style={{color:"rgba(255, 255, 255, 0.6);"}}>3rd Preference</option>
                <option style={{color:"black"}} value="Video Editing">Video Editing</option>
                <option style={{color:"black"}} value="Graphic Designing">Graphic Designing</option>
                <option style={{color:"black"}} value="Content Writing">Content Writing</option>
                <option style={{color:"black"}} value="Web-Development">Web-Development</option>
                <option style={{color:"black"}} value="Photography/Videography">Photography/Videography</option>
                <option style={{color:"black"}} value="Event Management">Event Management</option>
              </select>
            
        {/* SECTION 2 */}
            <h4 style={{margin:"1rem 0"}}>Rate Yourself</h4>
            <div className={styles.ratingRow}>
  <label>Time Management <span className={styles.required}>*</span></label>

  <div className={styles.stars}>
    <input type="radio" id="tm-1" name="entry.209770763" value="1" required />
    <label htmlFor="tm-1">★</label>

    <input type="radio" id="tm-2" name="entry.209770763" value="2" />
    <label htmlFor="tm-2">★</label>

    <input type="radio" id="tm-3" name="entry.209770763" value="3" />
    <label htmlFor="tm-3">★</label>

    <input type="radio" id="tm-4" name="entry.209770763" value="4" />
    <label htmlFor="tm-4">★</label>

    <input type="radio" id="tm-5" name="entry.209770763" value="5" />
    <label htmlFor="tm-5">★</label>

    {/* <input type="radio" id="tm-6" name="entry.209770763" value="6" />
    <label htmlFor="tm-6">★</label>

    <input type="radio" id="tm-7" name="entry.209770763" value="7" />
    <label htmlFor="tm-7">★</label> */}
  </div>

  <label>Communication Skills <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="cs-1" name="entry.2069342388" value="1" required />
    <label htmlFor="cs-1">★</label>

    <input type="radio" id="cs-2" name="entry.2069342388" value="2" />
    <label htmlFor="cs-2">★</label>

    <input type="radio" id="cs-3" name="entry.2069342388" value="3" />
    <label htmlFor="cs-3">★</label>

    <input type="radio" id="cs-4" name="entry.2069342388" value="4" />
    <label htmlFor="cs-4">★</label>

    <input type="radio" id="cs-5" name="entry.2069342388" value="5" />
    <label htmlFor="cs-5">★</label>

    {/* <input type="radio" id="cs-6" name="entry.2069342388" value="6" />
    <label htmlFor="cs-6">★</label>

    <input type="radio" id="cs-7" name="entry.2069342388" value="7" />
    <label htmlFor="cs-7">★</label> */}
  </div>

  <label>Networking <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="net-1" name="entry.1204357657" value="1" required />
    <label htmlFor="net-1">★</label>

    <input type="radio" id="net-2" name="entry.1204357657" value="2" />
    <label htmlFor="net-2">★</label>

    <input type="radio" id="net-3" name="entry.1204357657" value="3" />
    <label htmlFor="net-3">★</label>

    <input type="radio" id="net-4" name="entry.1204357657" value="4" />
    <label htmlFor="net-4">★</label>

    <input type="radio" id="net-5" name="entry.1204357657" value="5" />
    <label htmlFor="net-5">★</label>

    {/* <input type="radio" id="net-6" name="entry.1204357657" value="6" />
    <label htmlFor="net-6">★</label>

    <input type="radio" id="net-7" name="entry.1204357657" value="7" />
    <label htmlFor="net-7">★</label> */}
  </div>

  <label>Problem-Solving <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="ps-1" name="entry.210510830" value="1" required />
    <label htmlFor="ps-1">★</label>

    <input type="radio" id="ps-2" name="entry.210510830" value="2" />
    <label htmlFor="ps-2">★</label>

    <input type="radio" id="ps-3" name="entry.210510830" value="3" />
    <label htmlFor="ps-3">★</label>

    <input type="radio" id="ps-4" name="entry.210510830" value="4" />
    <label htmlFor="ps-4">★</label>

    <input type="radio" id="ps-5" name="entry.210510830" value="5" />
    <label htmlFor="ps-5">★</label>

    {/* <input type="radio" id="ps-6" name="entry.210510830" value="6" />
    <label htmlFor="ps-6">★</label>

    <input type="radio" id="ps-7" name="entry.210510830" value="7" />
    <label htmlFor="ps-7">★</label> */}
  </div>

  <label>Leadership <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="le-1" name="entry.193087137" value="1" required />
    <label htmlFor="le-1">★</label>

    <input type="radio" id="le-2" name="entry.193087137" value="2" />
    <label htmlFor="le-2">★</label>

    <input type="radio" id="le-3" name="entry.193087137" value="3" />
    <label htmlFor="le-3">★</label>

    <input type="radio" id="le-4" name="entry.193087137" value="4" />
    <label htmlFor="le-4">★</label>

    <input type="radio" id="le-5" name="entry.193087137" value="5" />
    <label htmlFor="le-5">★</label>

    {/* <input type="radio" id="le-6" name="entry.193087137" value="6" />
    <label htmlFor="le-6">★</label>

    <input type="radio" id="le-7" name="entry.193087137" value="7" />
    <label htmlFor="le-7">★</label> */}
  </div>

  <label>Public Speaking <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="pus-1" name="entry.119013012" value="1" required />
    <label htmlFor="pus-1">★</label>

    <input type="radio" id="pus-2" name="entry.119013012" value="2" />
    <label htmlFor="pus-2">★</label>

    <input type="radio" id="pus-3" name="entry.119013012" value="3" />
    <label htmlFor="pus-3">★</label>

    <input type="radio" id="pus-4" name="entry.119013012" value="4" />
    <label htmlFor="pus-4">★</label>

    <input type="radio" id="pus-5" name="entry.119013012" value="5" />
    <label htmlFor="pus-5">★</label>

    {/* <input type="radio" id="pus-6" name="entry.119013012" value="6" />
    <label htmlFor="pus-6">★</label>

    <input type="radio" id="pus-7" name="entry.119013012" value="7" />
    <label htmlFor="pus-7">★</label> */}
  </div>

  <label>Social-Media Engagement <span className={styles.required}>*</span></label>
  <div className={styles.stars}>
    <input type="radio" id="sme-1" name="entry.1649336951" value="1" required />
    <label htmlFor="sme-1">★</label>

    <input type="radio" id="sme-2" name="entry.1649336951" value="2" />
    <label htmlFor="sme-2">★</label>

    <input type="radio" id="sme-3" name="entry.1649336951" value="3" />
    <label htmlFor="sme-3">★</label>

    <input type="radio" id="sme-4" name="entry.1649336951" value="4" />
    <label htmlFor="sme-4">★</label>

    <input type="radio" id="sme-5" name="entry.1649336951" value="5" />
    <label htmlFor="sme-5">★</label>

    {/* <input type="radio" id="sme-6" name="entry.1649336951" value="6" />
    <label htmlFor="sme-6">★</label>

    <input type="radio" id="sme-7" name="entry.1649336951" value="7" />
    <label htmlFor="sme-7">★</label> */}
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
