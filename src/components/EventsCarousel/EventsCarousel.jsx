import { useState } from "react";
import styles from "./EventsCarousel.module.css";

// import your images
import img1 from "../../assets/events/Alumination.jpeg";
import img2 from "../../assets/events/Convo.jpeg";
import img3 from "../../assets/events/GlobalAlumniMeet.jpeg";
import img4 from "../../assets/events/Stamp.jpeg";
import img5 from "../../assets/events/NetworkingPitch.jpg";


const images = [
  { src: img1, alt: "Alumination",title: "Alumination" },
  { src: img2, alt: "Convocation",title: "Convocation" },
  { src: img3, alt: "GlobalAlumniMeet",title: "GlobalAlumniMeet" },
  { src: img4, alt: "Stamp",title: "Stamp" },
  { src: img5, alt: "Networking Pitch",title: "NetworkingPitch"},
];

const EventsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.carouselSection}>
      <h2>Our Events</h2>

      <div className={styles.carousel}>
        <button className={styles.prev} onClick={prevSlide}>
          ❮
        </button>

        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className={styles.slide}>
                <img
                src={img.src}
                alt={img.alt}
                className={styles.image}
                />
                <div className={styles.caption}>
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.next} onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default EventsCarousel;
