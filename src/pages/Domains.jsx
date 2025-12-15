import DomainCard from "../components/Domain/DomainCard";
import DomainMsg from "../components/Domain/DomainMsg";
import styles from "./Domains.module.css";

const domains = [
  {
    title: "Content Writing",
    description:
      "Craft compelling content for posts, events, and official communications.",
    icon: "✍️",
  },
  {
    title: "Web Development",
    description:
      "Build and maintain the SAIC website and digital platforms.",
    icon: "💻",
  },
  {
    title: "Graphic Designing",
    description:
      "Design posters, creatives, and visual assets for events and campaigns.",
    icon: "🎨",
  },
  {
    title: "Event Management",
    description:
      "Plan, organize, and execute alumni interactions and flagship events.",
    icon: "📅",
  },
  {
    title: "Video Editing",
    description:
      "Create engaging videos, reels, and after-movies for SAIC.",
    icon: "🎬",
  },
];

const Domains = () => {
  return (
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
  );
};

export default Domains;
