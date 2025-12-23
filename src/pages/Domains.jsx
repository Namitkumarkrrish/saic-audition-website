import DomainCard from "../components/Domain/DomainCard";
import DomainMsg from "../components/Domain/DomainMsg";
import styles from "./Domains.module.css";
import {
  PenLine,
  Code2,
  Palette,
  CalendarDays,
  Clapperboard,
  Camera
} from "lucide-react";

const domains = [
  {
    title: "Content Writing",
    description:
      "Craft compelling content for posts, events, and official communications.",
    icon: PenLine,
  },
  {
    title: "Web Development",
    description:
      "Build and maintain the SAIC website and digital platforms.",
    icon: Code2,
  },
  {
    title: "Graphic Designing",
    description:
      "Design posters, creatives, and visual assets for events and campaigns.",
    icon: Palette,
  },
  {
    title: "Event Management",
    description:
      "Plan, organize, and execute alumni interactions and flagship events.",
    icon: CalendarDays,
  },
  {
    title: "Video Editing",
    description:
      "Create engaging videos, reels, and after-movies for SAIC.",
    icon: Clapperboard,
  },
  {
    title: "VideoGraphy/PhotoGraphy",
    description: "Capture moments, events, and stories through compelling photography and videography.",
    icon: Camera,
  }
];

const Domains = () => {
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
    <section className={styles.domainsSection}>
      <DomainMsg />

      <div className={styles.grid}>
        {domains.map((elem, idx) => (
          <DomainCard
            key={idx}
            icon={elem.icon}
            title={elem.title}
            description={elem.description}
          />
        ))}
      </div>
    </section>
    </div>
    </>
  );
};

export default Domains;
