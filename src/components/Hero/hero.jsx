import Left from "./leftSide/Left";
import Right from "./rightside/Right";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.main}>
      <div className={styles.leftPart}>
        <Left />
      </div>
      <div className={styles.rightPart}>
        <Right />
      </div>
    </section>
  );
};

export default Hero;
