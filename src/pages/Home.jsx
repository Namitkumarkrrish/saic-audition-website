import Content from "../components/Content/Content";
import EventsCarousel from "../components/EventsCarousel/EventsCarousel";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styles from './Home.module.css'
const Home = () => {
  return (
  <>
  <div className="pageWrapper">
      {/* Lava Background */}
            <div className={styles.lavaBg}>
              <div className={styles.blob}></div>
              <div className={styles.blob}></div>
              <div className={styles.blob}></div>
              <div className={styles.blob}></div>
              <div className={styles.blob}></div>
            </div>
  <Hero />
  <Content />
  <EventsCarousel />
  </div>
  </>
  )
};

export default Home;
