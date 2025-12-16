import styles from "./DomainCard.module.css";

const DomainCard = ({ icon:Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={36} strokeWidth={1.8} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DomainCard;
