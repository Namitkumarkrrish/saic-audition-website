import styles from "./Left.module.css";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>
          Students’ Alumni Interaction Cell
        </h1>

        <h2>Welcome to SAIC Auditions</h2>
        <p>
          Step forward to become a part of the team shaping student–alumni engagement at NIT Durgapur.
        </p>

        <div className={styles.buttons}>
          <Link to="/apply" className={styles.primaryBtn}>
            Register Now
          </Link>

          <Link to="/domains" className={styles.secondaryBtn}>
              Explore Domains
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Left;
