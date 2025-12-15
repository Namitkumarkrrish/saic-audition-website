import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>
          Students’ Alumni <br />
          Interaction Cell
        </h1>

        <p>
          Bridging the gap between students and alumni of NIT Durgapur through
          meaningful connections, events, and collaborations.
        </p>

        <div className={styles.buttons}>
          <a href="#register" className={styles.primaryBtn}>
            Register Now
          </a>

          <Link to="/domains" className={styles.secondaryBtn}>
              Explore Domains
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
